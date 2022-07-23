import {
  GlueVersion,
  Job,
  JobExecutable,
  PythonVersion,
} from '@aws-cdk/aws-glue-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IGrantable, Grant } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CodeBuilder, CodeBuilderBase } from '../src';
import { SomeNode } from './node.test';

class DummyCodeNode extends SomeNode {
  constructor(id: string) {
    super(id, {
      imports: [`from ${id} import *`],
      body: [`${id}()`],
    });
  }
  grant(_grantee: IGrantable): Grant | undefined {
    return undefined;
  }
}
describe('CodeBuilderBase', () => {
  class SomeCodeBuilder extends CodeBuilderBase {
    get nodes() {
      return super.nodes;
    }
    codenize(): string {
      return '';
    }
  }
  test('nodes are distinct and order by genereation and nodeId', () => {
    const x1y1 = new DummyCodeNode('x1y1');
    const x5y1 = new DummyCodeNode('x5y1');
    const x2y2 = new DummyCodeNode('x2y2');
    const x4y2 = new DummyCodeNode('x4y2');
    const x3y3 = new DummyCodeNode('x3y3');
    const x2y4 = new DummyCodeNode('x2y4');
    const x4y4 = new DummyCodeNode('x4y4');
    const x1y5 = new DummyCodeNode('x1y5');
    const x5y5 = new DummyCodeNode('x5y5');

    x1y1.to(x2y2).to(x3y3).to(x4y4).to(x5y5);
    x5y1.to(x4y2).to(x3y3).to(x2y4).to(x1y5);

    const expected = [x1y1, x5y1, x2y2, x4y2, x3y3, x2y4, x4y4, x1y5, x5y5];
    expect(new SomeCodeBuilder(x1y1).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x5y1).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x2y2).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x4y2).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x3y3).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x2y4).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x4y4).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x1y5).nodes).toStrictEqual(expected);
    expect(new SomeCodeBuilder(x5y5).nodes).toStrictEqual(expected);
  });

  test('Not provide bucket, create bucket', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack');
    new Job(stack, 'Job', {
      executable: JobExecutable.pythonEtl({
        script: CodeBuilder.python(new DummyCodeNode('node')),
        glueVersion: GlueVersion.V3_0,
        pythonVersion: PythonVersion.THREE,
      }),
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });

  test('Provide bucket, doesnt create bucket', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack');
    const bucket = new Bucket(stack, 'Bucket', {
      bucketName: 'mybucket',
    });
    new Job(stack, 'Job', {
      executable: JobExecutable.pythonEtl({
        script: CodeBuilder.python(
          new DummyCodeNode('node'),
          bucket,
          'my-path'
        ),
        glueVersion: GlueVersion.V3_0,
        pythonVersion: PythonVersion.THREE,
      }),
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.findResources('AWS::S3::Bucket', {
      BucketName: 'mybucket',
    });
  });
});

describe('PythonCodeBuilder', () => {
  test('generate script order by generation', () => {
    const node1 = new DummyCodeNode('node1');
    const node2 = new DummyCodeNode('node2');
    const node3 = new DummyCodeNode('node3');
    const node = node3.to(node2).to(node1);
    const script = CodeBuilder.python(node).codenize();
    expect(script).toBe(`import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
from node3 import *
from node2 import *
from node1 import *

args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

node3()

node2()

node1()

job.commit`);
  });

  test('Create job is not throw error', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack');
    const node1 = new DummyCodeNode('node1');
    const node2 = new DummyCodeNode('node2');
    const node3 = new DummyCodeNode('node3');
    const node = node3.to(node2).to(node1);
    new Job(stack, 'Job', {
      executable: JobExecutable.pythonEtl({
        script: CodeBuilder.python(node),
        glueVersion: GlueVersion.V3_0,
        pythonVersion: PythonVersion.THREE,
      }),
    });
  });
});

describe('ScalaCodeBuilder', () => {
  test('Scala is not support yet so throw error', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack');
    const node1 = new DummyCodeNode('node1');
    const node2 = new DummyCodeNode('node2');
    const node3 = new DummyCodeNode('node3');
    const node = node3.to(node2).to(node1);
    expect(
      () =>
        new Job(stack, 'Job', {
          executable: JobExecutable.scalaEtl({
            script: CodeBuilder.scala(node),
            glueVersion: GlueVersion.V3_0,
            className: 'GlueApp',
          }),
        })
    ).toThrow();
  });
});
