import * as glue from '@aws-cdk/aws-glue-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Codenizer, DataSource, DataTarget, Transform } from '../../src';
import { RepresentNullValue } from '../../src/lib/transform/drop-null-fields';
import { Catalog, JobTest } from './util';

const app = new App();
const stack = new Stack(app, 'DropNullFields');

const sourceCatalog = new Catalog(stack, 'Source', {
  columns: [
    {
      name: 'id',
      type: glue.Schema.INTEGER,
    },
    {
      name: 'arn',
      type: glue.Schema.STRING,
    },
    {
      name: 'name',
      type: glue.Schema.STRING,
    },
    {
      name: 'will_drop1',
      type: glue.Schema.STRING,
    },
    {
      name: 'will_drop2',
      type: glue.Schema.STRING,
    },
    {
      name: 'will_drop3',
      type: glue.Schema.INTEGER,
    },
  ],
});
const targetCatalog = new Catalog(stack, 'Target', {
  columns: [
    {
      name: 'id',
      type: glue.Schema.INTEGER,
    },
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

const source = DataSource.s3Catalog('source', sourceCatalog);
const dropName = Transform.dropNullFields('drop_null', {
  fields: [
    RepresentNullValue.emptyString(),
    RepresentNullValue.nullString(),
    RepresentNullValue.minusOne(),
  ],
});
const target = DataTarget.s3Catalog('target', targetCatalog);

const jobGraph = source.to(dropName).to(target);

const job = new glue.Job(stack, 'Job', {
  executable: glue.JobExecutable.pythonEtl({
    script: Codenizer.python(jobGraph),
    glueVersion: glue.GlueVersion.V3_0,
    pythonVersion: glue.PythonVersion.THREE,
  }),
});

const testData = Source.data(
  'test.json',
  [
    {
      id: 1,
      arn: sourceCatalog.database.databaseArn,
      name: sourceCatalog.database.databaseName,
      will_drop1: '',
      will_drop2: 'null',
      will_drop3: -1,
    },
    {
      id: 2,
      arn: sourceCatalog.table.tableArn,
      name: sourceCatalog.table.tableName,
      will_drop1: '',
      will_drop2: 'null',
      will_drop3: -1,
    },
    {
      id: 3,
      arn: targetCatalog.database.databaseArn,
      name: targetCatalog.database.databaseName,
      will_drop1: '',
      will_drop2: 'null',
      will_drop3: -1,
    },
    {
      id: 4,
      arn: targetCatalog.table.tableArn,
      name: targetCatalog.table.tableName,
      will_drop1: '',
      will_drop2: 'null',
      will_drop3: -1,
    },
  ]
    .map((v) => JSON.stringify(v))
    .join('\n')
);

new JobTest(stack, 'JobTest', {
  job,
  testData,
  inputBucket: sourceCatalog.bucket,
  outputBucket: targetCatalog.bucket,
  expect: [
    {
      id: 1,
      arn: sourceCatalog.database.databaseArn,
      name: sourceCatalog.database.databaseName,
    },
    {
      id: 2,
      arn: sourceCatalog.table.tableArn,
      name: sourceCatalog.table.tableName,
    },
    {
      id: 3,
      arn: targetCatalog.database.databaseArn,
      name: targetCatalog.database.databaseName,
    },
    {
      id: 4,
      arn: targetCatalog.table.tableArn,
      name: targetCatalog.table.tableName,
    },
  ]
    .map((v) => JSON.stringify(v))
    .join('\n'),
});
