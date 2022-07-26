import { Column, Database, DataFormat, Table } from '@aws-cdk/aws-glue-alpha';
import { Lazy, Names, RemovalPolicy } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface CatalogProps {
  columns: Column[];
}

export class Catalog extends Construct {
  readonly database: Database;
  readonly table: Table;
  readonly bucket: Bucket;
  constructor(scope: Construct, id: string, props: CatalogProps) {
    super(scope, id);

    this.bucket = new Bucket(this, 'Bucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    this.database = new Database(this, 'Database', {
      databaseName: Lazy.string({
        produce: () =>
          Names.uniqueResourceName(this.database, {}).toLowerCase(),
      }),
    });
    this.table = new Table(this, 'Table', {
      tableName: Lazy.string({
        produce: () => Names.uniqueResourceName(this.table, {}).toLowerCase(),
      }),
      database: this.database,
      bucket: this.bucket,
      dataFormat: DataFormat.JSON,
      columns: props.columns,
    });
  }
}
