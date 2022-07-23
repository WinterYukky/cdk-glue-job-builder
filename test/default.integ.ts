import * as glue from '@aws-cdk/aws-glue-alpha';
import * as cdk from 'aws-cdk-lib';
import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { CodeBuilder, DataSource, DataTarget, Transform } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

// S3 Catalog Source
const sourceBucket = new Bucket(stack, 'SourceBucket', {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});
const sourceDatabase = new glue.Database(stack, 'SourceDatabase', {
  databaseName: 'source_database',
});
const sourceTable = new glue.Table(stack, 'SourceTable', {
  tableName: 'source_table',
  database: sourceDatabase,
  bucket: sourceBucket,
  dataFormat: glue.DataFormat.JSON,
  columns: [
    {
      name: 'arn',
      type: glue.Schema.STRING,
    },
    {
      name: 'name',
      type: glue.Schema.STRING,
    },
  ],
});
const source = DataSource.s3Catalog('source', {
  database: sourceDatabase,
  table: sourceTable,
  bucket: sourceTable.bucket,
});

// Will drop name field
const dropName = Transform.dropFields('drop_name', {
  fields: ['name'],
});

// S3 Catalog Target
const targetBucket = new Bucket(stack, 'TargetBucket', {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});
const targetDatabase = new glue.Database(stack, 'TargetDatabase', {
  databaseName: 'target_database',
});
const targetTable = new glue.Table(stack, 'TargetTable', {
  tableName: 'target_table',
  database: targetDatabase,
  bucket: targetBucket,
  dataFormat: glue.DataFormat.JSON,
  columns: [
    {
      name: 'arn',
      type: glue.Schema.STRING,
    },
  ],
});
const target = DataTarget.s3Catalog('target', {
  database: targetDatabase,
  table: targetTable,
  bucket: targetTable.bucket,
});

// chain nodes.
const jobGraph = source.to(dropName).to(target);

const job = new glue.Job(stack, 'Job', {
  executable: glue.JobExecutable.pythonEtl({
    script: CodeBuilder.python(jobGraph),
    glueVersion: glue.GlueVersion.V3_0,
    pythonVersion: glue.PythonVersion.THREE,
  }),
});

const testData = Source.data(
  'test.json',
  [
    { arn: sourceDatabase.databaseArn, name: sourceDatabase.databaseName },
    { arn: sourceTable.tableArn, name: sourceTable.tableName },
    { arn: targetDatabase.databaseArn, name: targetDatabase.databaseName },
    { arn: targetTable.tableArn, name: targetTable.tableName },
  ]
    .map((v) => JSON.stringify(v))
    .join('\n')
);
new BucketDeployment(stack, 'BucketDeployment', {
  sources: [testData],
  destinationBucket: sourceTable.bucket,
});

new CfnOutput(stack, 'SourceBucketConsole', {
  value: `https://s3.console.aws.amazon.com/s3/buckets/${sourceBucket.bucketName}`,
});
new CfnOutput(stack, 'GlueConsole', {
  value: `https://${stack.region}.console.aws.amazon.com/gluestudio/home?region=${stack.region}#/editor/job/${job.jobName}/script`,
});
new CfnOutput(stack, 'TargetBucketConsole', {
  value: `https://s3.console.aws.amazon.com/s3/buckets/${targetBucket.bucketName}`,
});
