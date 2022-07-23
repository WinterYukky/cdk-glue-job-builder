import { IDatabase, ITable } from '@aws-cdk/aws-glue-alpha';
import { Grant, IGrantable } from 'aws-cdk-lib/aws-iam';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { CodeFragment } from './code-builder';
import { IGranter, NodeBase } from './node';

/**
 * Props of CatalogSource.
 */
export interface CatalogSourceProps {
  /**
   * The database to read from.
   */
  readonly database: IDatabase;
  /**
   * The table in the database to read from.
   */
  readonly table: ITable;
  /**
   * The name of your data source.
   *
   * @default 'AWS Glue Data Catalog'
   */
  readonly name?: string;
  /**
   * Granter the necessary authorization to a node.
   */
  readonly granter?: IGranter;
}

/**
 * Specifies a data store in the Glue Data Catalog.
 */
export class CatalogSource extends NodeBase {
  readonly database: IDatabase;
  readonly table: ITable;
  private readonly granter?: IGranter;
  constructor(id: string, props: CatalogSourceProps) {
    super(id, props.name ?? 'AWS Glue Data Catalog');
    this.database = props.database;
    this.table = props.table;
    this.granter = props.granter;
  }

  python(): CodeFragment {
    if (this.inputs.length !== 0) {
      throw new Error('The catalog source cannot set inputs.');
    }
    return {
      imports: [],
      body: [
        [
          `# Script generated by CDK for node ${this.name}`,
          `${this.nodeId} = glueContext.create_dynamic_frame.from_catalog(`,
          `    database="${this.database.databaseName}",`,
          `    table_name="${this.table.tableName}",`,
          `    transformation_ctx="${this.nodeId}",`,
          `)`,
        ].join('\n'),
      ],
    };
  }
  scala(): CodeFragment {
    throw new Error('Method not implemented.');
  }
  grant(job: IGrantable): Grant | undefined {
    return this.granter?.grant(job);
  }
}

/**
 * Props of S3CatalogSource.
 */
export interface S3CatalogSourceProps {
  /**
   * The database to read from.
   */
  readonly database: IDatabase;
  /**
   * The table in the database to read from.
   */
  readonly table: ITable;
  /**
   * The bucket of table.
   */
  readonly bucket: IBucket;
  /**
   * The name of your data source.
   *
   * @default 'Amazon S3'
   */
  readonly name?: string;
}

/**
 * Specifies an Amazon S3 data store in the Glue Data Catalog.
 */
export class S3CatalogSource extends CatalogSource {
  constructor(id: string, props: S3CatalogSourceProps) {
    super(id, {
      database: props.database,
      table: props.table,
      name: props.name ?? 'Amazon S3',
      granter: {
        grant(job) {
          return props.bucket.grantRead(job);
        },
      },
    });
  }
}

/**
 * Data sources.
 */
export class DataSource {
  /**
   * Create a new {@link CatalogSource}.
   */
  static catalog(id: string, props: CatalogSourceProps) {
    return new CatalogSource(id, props);
  }
  /**
   * Create a new {@link S3CatalogSource}.
   */
  static s3Catalog(id: string, props: S3CatalogSourceProps) {
    return new S3CatalogSource(id, props);
  }
}
