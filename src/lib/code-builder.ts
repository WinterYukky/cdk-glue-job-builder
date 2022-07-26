import { Code, CodeConfig, S3Code } from '@aws-cdk/aws-glue-alpha';
import { Names, RemovalPolicy } from 'aws-cdk-lib';
import { IGrantable } from 'aws-cdk-lib/aws-iam';
import { IBucket, Bucket, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { INode } from './node';

/**
 * Fragment of code.
 */
export interface CodeFragment {
  /**
   * Import section of CodeFragment.
   *
   * @default - No imports.
   */
  readonly imports?: string[];
  /**
   * Set the code to be written between the import section and body.
   * Functions must be defined here.
   *
   * @default - No head codes.
   */
  readonly head?: string[];
  /**
   * The body is output between the head and tail sections.
   * The ETL is written here.
   *
   * @default - No body codes.
   **/
  readonly body?: string[];
  /**
   * The tail is output just before job.commit().
   *
   * @default - No tail codes.
   */
  readonly tail?: string[];
}

export abstract class CodeBuilderBase extends Code {
  constructor(
    /**
     * The Node you want to build.
     */
    private readonly node: INode,
    /**
     * Built code save S3 bucket.
     *
     * @default - generate a new Bucket
     */
    protected readonly bucket?: IBucket,
    /**
     * Built code save S3 object key.
     *
     * @default - generate a object key
     */
    protected readonly objectKey?: string
  ) {
    super();
  }

  protected get nodes(): INode[] {
    const listTopNodes: (nodes: INode[]) => INode[] = (nodes: INode[]) =>
      nodes.flatMap((node) =>
        node.inputs.length === 0 ? [node] : listTopNodes(node.inputs)
      );
    const listBottomNodes: (nodes: INode[]) => INode[] = (nodes: INode[]) =>
      nodes.flatMap((node) =>
        node.outputs.length === 0 ? [node] : listBottomNodes(node.outputs)
      );
    // This nodes may be part of the top nodes.
    const partialTopNodes = listTopNodes([this.node]);
    const bottomNodes = listBottomNodes(partialTopNodes);
    const topNodes = listTopNodes(bottomNodes);
    const deepListOutputs: (nodes: INode[]) => INode[] = (nodes: INode[]) =>
      nodes.flatMap((node) => [node, ...deepListOutputs(node.outputs)]);
    const deepListInputs: (nodes: INode[]) => INode[] = (nodes: INode[]) =>
      nodes.flatMap((node) => [node, ...deepListInputs(node.inputs)]);
    return Array.from(
      new Set([...deepListOutputs(topNodes), ...deepListInputs(bottomNodes)])
    ).sort((a, b) =>
      a.generation !== b.generation
        ? a.generation - b.generation
        : a.nodeId < b.nodeId
        ? -1
        : 1
    );
  }

  bind(scope: Construct, grantable: IGrantable): CodeConfig {
    this.nodes.forEach((node) => node.grant(grantable));
    const bucket =
      this.bucket ??
      new Bucket(scope, 'ScriptBucket', {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      });
    const objectKey = this.objectKey ?? `${Names.uniqueId(scope)}.py`;
    new BucketDeployment(scope, 'ScriptDeployment', {
      destinationBucket: bucket,
      sources: [Source.data(objectKey, this.codenize())],
    });
    return new S3Code(bucket, objectKey).bind(scope, grantable);
  }

  abstract codenize(): string;
}

/**
 * Build Python code from nodes.
 */
export class PythonCodeBuilder extends CodeBuilderBase {
  private readonly core: CodeFragment = {
    imports: [
      'import sys',
      'from awsglue.transforms import *',
      'from awsglue.utils import getResolvedOptions',
      'from pyspark.context import SparkContext',
      'from awsglue.context import GlueContext',
      'from awsglue.job import Job',
    ],
    head: [
      [
        `args = getResolvedOptions(sys.argv, ["JOB_NAME"])`,
        `sc = SparkContext()`,
        `glueContext = GlueContext(sc)`,
        `spark = glueContext.spark_session`,
        `job = Job(glueContext)`,
        `job.init(args["JOB_NAME"], args)`,
      ].join('\n'),
    ],
    tail: ['job.commit()'],
  };
  codenize(): string {
    const codes = [this.core, ...this.nodes.map((node) => node.python())];
    const imports = Array.from(
      new Set(codes.flatMap((code) => code.imports ?? []))
    ).join('\n');
    const head = Array.from(new Set(codes.flatMap((code) => code.head ?? [])));
    const body = Array.from(new Set(codes.flatMap((code) => code.body ?? [])));
    const tail = Array.from(new Set(codes.flatMap((code) => code.tail ?? [])));
    return [imports, ...head, ...body, ...tail].join('\n\n');
  }
}

/**
 * Build Scala code from nodes.
 * @todo Scala is not support yet.
 */
export class ScalaCodeBuilder extends CodeBuilderBase {
  codenize(): string {
    throw new Error('Method not implemented.');
  }
}

export class CodeBuilder {
  static python(
    /**
     * The Node you want to build.
     */
    node: INode,
    /**
     * Built code save S3 bucket.
     *
     * @default - generate a new Bucket
     */
    bucket?: IBucket,
    /**
     * Built code save S3 object key.
     *
     * @default - generate a object key
     */
    objectKey?: string
  ) {
    return new PythonCodeBuilder(node, bucket, objectKey);
  }
  static scala(
    /**
     * The Node you want to build.
     */
    node: INode,
    /**
     * Built code save S3 bucket.
     *
     * @default - generate a new Bucket
     */
    bucket?: IBucket,
    /**
     * Built code save S3 object key.
     *
     * @default - generate a object key
     */
    objectKey?: string
  ) {
    return new ScalaCodeBuilder(node, bucket, objectKey);
  }
}
