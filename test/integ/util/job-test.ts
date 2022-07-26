import { join } from 'path';
import { IJob, Job } from '@aws-cdk/aws-glue-alpha';
import { CustomResource, Duration } from 'aws-cdk-lib';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, ISource } from 'aws-cdk-lib/aws-s3-deployment';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  AwsSdkCall,
  PhysicalResourceId,
  Provider,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface JobTestProps {
  job: Job;
  testData: ISource;
  inputBucket: IBucket;
  outputBucket: IBucket;
  expect: string;
}

export class JobTest extends Construct {
  constructor(scope: Construct, id: string, props: JobTestProps) {
    super(scope, id);
    const deployTestData = new BucketDeployment(this, 'DeploymentTestData', {
      sources: [props.testData],
      destinationBucket: props.inputBucket,
    });

    const startJobSync = new StartJobSync(this, 'StartJobSync', props);
    startJobSync.node.addDependency(deployTestData);

    const s3Object = new FirstS3Object(this, 'FirstS3Object', {
      bucket: props.outputBucket,
    });
    s3Object.node.addDependency(startJobSync);

    const assertEqualsProvider = new Provider(this, 'AssertEqualsProvider', {
      onEventHandler: new NodejsFunction(this, 'AssertEqualsFunction', {
        entry: join(__dirname, 'assert-equals/index.ts'),
        architecture: Architecture.ARM_64,
      }),
    });
    new CustomResource(this, 'AssertEquals', {
      serviceToken: assertEqualsProvider.serviceToken,
      properties: {
        expect: props.expect,
        actual: s3Object.body,
      },
    });
  }
}

interface StartJobSyncProps {
  job: IJob;
}

class StartJobSync extends Construct {
  readonly jobRunId: string;
  constructor(scope: Construct, id: string, props: StartJobSyncProps) {
    super(scope, id);
    const startJobAction: AwsSdkCall = {
      service: 'Glue',
      action: 'startJobRun',
      physicalResourceId: PhysicalResourceId.of('StarJob'),
      parameters: {
        JobName: props.job.jobName,
      },
    };
    const startJob = new AwsCustomResource(this, 'StarJob', {
      onCreate: startJobAction,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: [props.job.jobArn],
      }),
      installLatestAwsSdk: false,
    });
    this.jobRunId = startJob.getResponseField('JobRunId');

    const waitJobFinishProvider = new Provider(this, 'WaitJobFinishProvider', {
      onEventHandler: new NodejsFunction(this, 'WaitJobFinishOnEvent', {
        entry: join(__dirname, 'wait-for-job-finish/index.ts'),
        handler: 'onEvent',
        architecture: Architecture.ARM_64,
      }),
      isCompleteHandler: new NodejsFunction(this, 'WaitJobFinishIsComplete', {
        entry: join(__dirname, 'wait-for-job-finish/index.ts'),
        handler: 'isComplete',
        architecture: Architecture.ARM_64,
        initialPolicy: [
          new PolicyStatement({
            effect: Effect.ALLOW,
            resources: [props.job.jobArn],
            actions: ['glue:GetJobRun'],
          }),
        ],
      }),
      queryInterval: Duration.seconds(30),
      totalTimeout: Duration.minutes(5),
    });
    new CustomResource(this, 'WaitJobFinish', {
      serviceToken: waitJobFinishProvider.serviceToken,
      properties: {
        jobName: props.job.jobName,
        runId: this.jobRunId,
      },
    });
  }
}

interface FirstS3ObjectProps {
  bucket: IBucket;
}

class FirstS3Object extends Construct {
  readonly body: string;
  constructor(scope: Construct, id: string, props: FirstS3ObjectProps) {
    super(scope, id);
    const listObjectsAction: AwsSdkCall = {
      service: 'S3',
      action: 'listObjectsV2',
      physicalResourceId: PhysicalResourceId.of('ListObjectsV2'),
      parameters: {
        Bucket: props.bucket.bucketName,
      },
    };
    const listObjects = new AwsCustomResource(this, 'ListObjectsV2', {
      onCreate: listObjectsAction,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: [props.bucket.bucketArn, `${props.bucket.bucketArn}/*`],
      }),
      installLatestAwsSdk: false,
    });
    props.bucket.grantRead(listObjects);

    const getObjectAction: AwsSdkCall = {
      service: 'S3',
      action: 'getObject',
      physicalResourceId: PhysicalResourceId.of('GetObject'),
      parameters: {
        Bucket: props.bucket.bucketName,
        Key: listObjects.getResponseField('Contents.0.Key'),
      },
    };
    const getObject = new AwsCustomResource(this, 'GetObject', {
      onCreate: getObjectAction,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: [props.bucket.bucketArn, `${props.bucket.bucketArn}/*`],
      }),
      installLatestAwsSdk: false,
    });
    this.body = getObject.getResponseField('Body');
  }
}
