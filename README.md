# Glue Job Builder

A construct library that builds Glue Job Script as if it were Glue Studio.

## Install

```bash
yarn add cdk-glue-job-builder
```

## Get started

Create nodes from `DataSource`, `DataTarget`, and `Transform` and connect them with the `INode.to` (or `INode.from`) method.
Once you have connected any nodes, simply pass any node (anywhere in the node graph) to `CodeBuilder.python` and pass it to the script in `glue.Job`.
The following is an example of connecting data from a data catalog to a data catalog with a name field dropped.

```ts
import * as glue from '@aws-cdk/aws-glue-alpha';
import {
  CodeBuilder,
  DataSource,
  DataTarget,
  Transform,
} from 'cdk-glue-job-builder';

// S3 Catalog Source
declare const sourceDatabase: glue.Database;
declare const sourceTable: glue.Table;
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
declare const targetDatabase: glue.Database;
declare const targetTable: glue.Table;
const target = DataTarget.s3Catalog('target', {
  database: targetDatabase,
  table: targetTable,
  bucket: targetTable.bucket,
});

// chain nodes.
const jobGraph = source.to(dropName).to(target);

new glue.Job(stack, 'Job', {
  executable: glue.JobExecutable.pythonEtl({
    script: CodeBuilder.python(jobGraph),
    glueVersion: glue.GlueVersion.V3_0,
    pythonVersion: glue.PythonVersion.THREE,
  }),
});
```

## Quick Start

The following tutorial is an example of dropping a physical name from a JSON object list of ARNs and physical names.

1. Initialize you CDK App.
1. Rewrite your stack file to following code.

```ts
import * as glue from '@aws-cdk/aws-glue-alpha';
import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import {
  CodeBuilder,
  DataSource,
  DataTarget,
  Transform,
} from 'cdk-glue-job-builder';

export class YourStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3 Catalog Source
    const sourceBucket = new Bucket(this, 'SourceBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    const sourceDatabase = new glue.Database(this, 'SourceDatabase', {
      databaseName: 'source_database',
    });
    const sourceTable = new glue.Table(this, 'SourceTable', {
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
    const targetBucket = new Bucket(this, 'TargetBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    const targetDatabase = new glue.Database(this, 'TargetDatabase', {
      databaseName: 'target_database',
    });
    const targetTable = new glue.Table(this, 'TargetTable', {
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

    const job = new glue.Job(this, 'Job', {
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
    new BucketDeployment(this, 'BucketDeployment', {
      sources: [testData],
      destinationBucket: sourceTable.bucket,
    });

    new CfnOutput(this, 'SourceBucketConsole', {
      value: `https://s3.console.aws.amazon.com/s3/buckets/${sourceBucket.bucketName}`,
    });
    new CfnOutput(this, 'GlueConsole', {
      value: `https://${this.region}.console.aws.amazon.com/gluestudio/home?region=${this.region}#/editor/job/${job.jobName}/script`,
    });
    new CfnOutput(this, 'TargetBucketConsole', {
      value: `https://s3.console.aws.amazon.com/s3/buckets/${targetBucket.bucketName}`,
    });
  }
}
```

3. Run `cdk deploy`.
4. Access the displayed `SourceBucketConsole` and check the `test.json`.
5. Access the displayed `GlueConsole` and Run job.
6. Access the displayed `TargetBucketConsole` and check a file.
7. Run `cdk destroy`.
