# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### CatalogSourceProps <a name="CatalogSourceProps" id="cdk-glue-job-builder.CatalogSourceProps"></a>

Props of CatalogSource.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.CatalogSourceProps.Initializer"></a>

```typescript
import { CatalogSourceProps } from 'cdk-glue-job-builder'

const catalogSourceProps: CatalogSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogSourceProps.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | The database to read from. |
| <code><a href="#cdk-glue-job-builder.CatalogSourceProps.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | The table in the database to read from. |
| <code><a href="#cdk-glue-job-builder.CatalogSourceProps.property.granter">granter</a></code> | <code><a href="#cdk-glue-job-builder.IGranter">IGranter</a></code> | Granter the necessary authorization to a node. |
| <code><a href="#cdk-glue-job-builder.CatalogSourceProps.property.name">name</a></code> | <code>string</code> | The name of your data source. |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.CatalogSourceProps.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

The database to read from.

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.CatalogSourceProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

The table in the database to read from.

---

##### `granter`<sup>Optional</sup> <a name="granter" id="cdk-glue-job-builder.CatalogSourceProps.property.granter"></a>

```typescript
public readonly granter: IGranter;
```

- *Type:* <a href="#cdk-glue-job-builder.IGranter">IGranter</a>

Granter the necessary authorization to a node.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.CatalogSourceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'AWS Glue Data Catalog'

The name of your data source.

---

### CatalogTargetProps <a name="CatalogTargetProps" id="cdk-glue-job-builder.CatalogTargetProps"></a>

Props of CatalogTarget.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.CatalogTargetProps.Initializer"></a>

```typescript
import { CatalogTargetProps } from 'cdk-glue-job-builder'

const catalogTargetProps: CatalogTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogTargetProps.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | The database that contains the table you want to use as the target. |
| <code><a href="#cdk-glue-job-builder.CatalogTargetProps.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | The table that defines the schema of your output data. |
| <code><a href="#cdk-glue-job-builder.CatalogTargetProps.property.granter">granter</a></code> | <code><a href="#cdk-glue-job-builder.IGranter">IGranter</a></code> | Granter the necessary authorization to a node. |
| <code><a href="#cdk-glue-job-builder.CatalogTargetProps.property.name">name</a></code> | <code>string</code> | The name of the data target. |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.CatalogTargetProps.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

The database that contains the table you want to use as the target.

This database must already exist in the Data Catalog.

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.CatalogTargetProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

The table that defines the schema of your output data.

This table must already exist in the Data Catalog.

---

##### `granter`<sup>Optional</sup> <a name="granter" id="cdk-glue-job-builder.CatalogTargetProps.property.granter"></a>

```typescript
public readonly granter: IGranter;
```

- *Type:* <a href="#cdk-glue-job-builder.IGranter">IGranter</a>

Granter the necessary authorization to a node.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.CatalogTargetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'AWS Glue Data Catalog'

The name of the data target.

---

### CodeFragment <a name="CodeFragment" id="cdk-glue-job-builder.CodeFragment"></a>

Fragment of code.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.CodeFragment.Initializer"></a>

```typescript
import { CodeFragment } from 'cdk-glue-job-builder'

const codeFragment: CodeFragment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.body">body</a></code> | <code>string[]</code> | Body section of CodeFragment. |
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.imports">imports</a></code> | <code>string[]</code> | Import section of CodeFragment. |

---

##### `body`<sup>Required</sup> <a name="body" id="cdk-glue-job-builder.CodeFragment.property.body"></a>

```typescript
public readonly body: string[];
```

- *Type:* string[]

Body section of CodeFragment.

---

##### `imports`<sup>Required</sup> <a name="imports" id="cdk-glue-job-builder.CodeFragment.property.imports"></a>

```typescript
public readonly imports: string[];
```

- *Type:* string[]

Import section of CodeFragment.

---

### DropFieldsProps <a name="DropFieldsProps" id="cdk-glue-job-builder.DropFieldsProps"></a>

Props of DropFields.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.DropFieldsProps.Initializer"></a>

```typescript
import { DropFieldsProps } from 'cdk-glue-job-builder'

const dropFieldsProps: DropFieldsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropFieldsProps.property.fields">fields</a></code> | <code>string[]</code> | Field you want to drop. |
| <code><a href="#cdk-glue-job-builder.DropFieldsProps.property.name">name</a></code> | <code>string</code> | Name of node. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="cdk-glue-job-builder.DropFieldsProps.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Field you want to drop.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.DropFieldsProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Drop Fields'

Name of node.

---

### S3CatalogSourceProps <a name="S3CatalogSourceProps" id="cdk-glue-job-builder.S3CatalogSourceProps"></a>

Props of S3CatalogSource.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.S3CatalogSourceProps.Initializer"></a>

```typescript
import { S3CatalogSourceProps } from 'cdk-glue-job-builder'

const s3CatalogSourceProps: S3CatalogSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogSourceProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket of table. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSourceProps.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | The database to read from. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSourceProps.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | The table in the database to read from. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSourceProps.property.name">name</a></code> | <code>string</code> | The name of your data source. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.S3CatalogSourceProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket of table.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.S3CatalogSourceProps.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

The database to read from.

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.S3CatalogSourceProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

The table in the database to read from.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.S3CatalogSourceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Amazon S3'

The name of your data source.

---

### S3CatalogTargetProps <a name="S3CatalogTargetProps" id="cdk-glue-job-builder.S3CatalogTargetProps"></a>

Props of S3CatalogTarget.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.S3CatalogTargetProps.Initializer"></a>

```typescript
import { S3CatalogTargetProps } from 'cdk-glue-job-builder'

const s3CatalogTargetProps: S3CatalogTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogTargetProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket of table. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTargetProps.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | The database that contains the table you want to use as the target. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTargetProps.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | The table that defines the schema of your output data. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTargetProps.property.name">name</a></code> | <code>string</code> | The name of your data source. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.S3CatalogTargetProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket of table.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.S3CatalogTargetProps.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

The database that contains the table you want to use as the target.

This database must already exist in the Data Catalog.

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.S3CatalogTargetProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

The table that defines the schema of your output data.

This table must already exist in the Data Catalog.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.S3CatalogTargetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Amazon S3'

The name of your data source.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogSource <a name="CatalogSource" id="cdk-glue-job-builder.CatalogSource"></a>

Specifies a data store in the Glue Data Catalog.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.CatalogSource.Initializer"></a>

```typescript
import { CatalogSource } from 'cdk-glue-job-builder'

new CatalogSource(id: string, props: CatalogSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogSource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.CatalogSourceProps">CatalogSourceProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.CatalogSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.CatalogSource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.CatalogSourceProps">CatalogSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogSource.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.CatalogSource.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CatalogSource.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.CatalogSource.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.CatalogSource.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.CatalogSource.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.CatalogSource.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.CatalogSource.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CatalogSource.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.generation">generation</a></code> | <code>number</code> | Generation of node. |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogSource.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | *No description.* |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.CatalogSource.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.CatalogSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.CatalogSource.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.CatalogSource.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.CatalogSource.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.CatalogSource.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.CatalogSource.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

---


### CatalogTarget <a name="CatalogTarget" id="cdk-glue-job-builder.CatalogTarget"></a>

Specifies a data target that writes to AWS Glue Data Catalog using the Glue Data Catalog.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.CatalogTarget.Initializer"></a>

```typescript
import { CatalogTarget } from 'cdk-glue-job-builder'

new CatalogTarget(id: string, props: CatalogTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.CatalogTargetProps">CatalogTargetProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.CatalogTarget.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.CatalogTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.CatalogTargetProps">CatalogTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.CatalogTarget.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CatalogTarget.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.CatalogTarget.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.CatalogTarget.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.CatalogTarget.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.CatalogTarget.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.CatalogTarget.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CatalogTarget.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.generation">generation</a></code> | <code>number</code> | Generation of node. |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CatalogTarget.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | *No description.* |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.CatalogTarget.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.CatalogTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.CatalogTarget.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.CatalogTarget.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.CatalogTarget.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.CatalogTarget.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.CatalogTarget.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

---


### CodeBuilder <a name="CodeBuilder" id="cdk-glue-job-builder.CodeBuilder"></a>

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.CodeBuilder.Initializer"></a>

```typescript
import { CodeBuilder } from 'cdk-glue-job-builder'

new CodeBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CodeBuilder.python">python</a></code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.CodeBuilder.scala">scala</a></code> | *No description.* |

---

##### `python` <a name="python" id="cdk-glue-job-builder.CodeBuilder.python"></a>

```typescript
import { CodeBuilder } from 'cdk-glue-job-builder'

CodeBuilder.python(node: INode, bucket?: IBucket, objectKey?: string)
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CodeBuilder.python.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.CodeBuilder.python.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

###### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.CodeBuilder.python.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

##### `scala` <a name="scala" id="cdk-glue-job-builder.CodeBuilder.scala"></a>

```typescript
import { CodeBuilder } from 'cdk-glue-job-builder'

CodeBuilder.scala(node: INode, bucket?: IBucket, objectKey?: string)
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CodeBuilder.scala.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.CodeBuilder.scala.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

###### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.CodeBuilder.scala.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---



### CodeBuilderBase <a name="CodeBuilderBase" id="cdk-glue-job-builder.CodeBuilderBase"></a>

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.CodeBuilderBase.Initializer"></a>

```typescript
import { CodeBuilderBase } from 'cdk-glue-job-builder'

new CodeBuilderBase(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.CodeBuilderBase.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.CodeBuilderBase.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.CodeBuilderBase.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.CodeBuilderBase.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.CodeBuilderBase.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.CodeBuilderBase.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.CodeBuilderBase.fromAsset"></a>

```typescript
import { CodeBuilderBase } from 'cdk-glue-job-builder'

CodeBuilderBase.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.CodeBuilderBase.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.CodeBuilderBase.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.CodeBuilderBase.fromBucket"></a>

```typescript
import { CodeBuilderBase } from 'cdk-glue-job-builder'

CodeBuilderBase.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.CodeBuilderBase.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.CodeBuilderBase.fromBucket.parameter.key"></a>

- *Type:* string

The object key.

---



### DataSource <a name="DataSource" id="cdk-glue-job-builder.DataSource"></a>

Data sources.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.DataSource.Initializer"></a>

```typescript
import { DataSource } from 'cdk-glue-job-builder'

new DataSource()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.DataSource.catalog">catalog</a></code> | Create a new {@link CatalogSource}. |
| <code><a href="#cdk-glue-job-builder.DataSource.s3Catalog">s3Catalog</a></code> | Create a new {@link S3CatalogSource}. |

---

##### `catalog` <a name="catalog" id="cdk-glue-job-builder.DataSource.catalog"></a>

```typescript
import { DataSource } from 'cdk-glue-job-builder'

DataSource.catalog(id: string, props: CatalogSourceProps)
```

Create a new {@link CatalogSource}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DataSource.catalog.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DataSource.catalog.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.CatalogSourceProps">CatalogSourceProps</a>

---

##### `s3Catalog` <a name="s3Catalog" id="cdk-glue-job-builder.DataSource.s3Catalog"></a>

```typescript
import { DataSource } from 'cdk-glue-job-builder'

DataSource.s3Catalog(id: string, props: S3CatalogSourceProps)
```

Create a new {@link S3CatalogSource}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DataSource.s3Catalog.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DataSource.s3Catalog.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.S3CatalogSourceProps">S3CatalogSourceProps</a>

---



### DataTarget <a name="DataTarget" id="cdk-glue-job-builder.DataTarget"></a>

Data targets.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.DataTarget.Initializer"></a>

```typescript
import { DataTarget } from 'cdk-glue-job-builder'

new DataTarget()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.DataTarget.catalog">catalog</a></code> | Create a new {@link CatalogTarget}. |
| <code><a href="#cdk-glue-job-builder.DataTarget.s3Catalog">s3Catalog</a></code> | Create a new {@link S3CatalogTarget}. |

---

##### `catalog` <a name="catalog" id="cdk-glue-job-builder.DataTarget.catalog"></a>

```typescript
import { DataTarget } from 'cdk-glue-job-builder'

DataTarget.catalog(id: string, props: CatalogTargetProps)
```

Create a new {@link CatalogTarget}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DataTarget.catalog.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DataTarget.catalog.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.CatalogTargetProps">CatalogTargetProps</a>

---

##### `s3Catalog` <a name="s3Catalog" id="cdk-glue-job-builder.DataTarget.s3Catalog"></a>

```typescript
import { DataTarget } from 'cdk-glue-job-builder'

DataTarget.s3Catalog(id: string, props: S3CatalogTargetProps)
```

Create a new {@link S3CatalogTarget}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DataTarget.s3Catalog.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DataTarget.s3Catalog.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.S3CatalogTargetProps">S3CatalogTargetProps</a>

---



### DropFields <a name="DropFields" id="cdk-glue-job-builder.DropFields"></a>

Transform of Drop Fields.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.DropFields.Initializer"></a>

```typescript
import { DropFields } from 'cdk-glue-job-builder'

new DropFields(id: string, props: DropFieldsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropFields.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.DropFields.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.DropFieldsProps">DropFieldsProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DropFields.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DropFields.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.DropFieldsProps">DropFieldsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.DropFields.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.DropFields.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.DropFields.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.DropFields.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.DropFields.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.DropFields.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.DropFields.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.DropFields.grant"></a>

```typescript
public grant(_grantee: IGrantable): Grant
```

Granting Glue job permissions.

###### `_grantee`<sup>Required</sup> <a name="_grantee" id="cdk-glue-job-builder.DropFields.grant.parameter._grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.DropFields.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.DropFields.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.DropFields.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.DropFields.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropFields.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.DropFields.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.DropFields.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.DropFields.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.DropFields.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.DropFields.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.DropFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.DropFields.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.DropFields.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.DropFields.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---


### NodeBase <a name="NodeBase" id="cdk-glue-job-builder.NodeBase"></a>

- *Implements:* <a href="#cdk-glue-job-builder.INode">INode</a>

Base of node.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.NodeBase.Initializer"></a>

```typescript
import { NodeBase } from 'cdk-glue-job-builder'

new NodeBase(id: string, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.NodeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.NodeBase.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.NodeBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.NodeBase.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.NodeBase.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.NodeBase.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.NodeBase.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.NodeBase.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.NodeBase.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.NodeBase.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.NodeBase.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.NodeBase.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.NodeBase.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.NodeBase.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.NodeBase.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.NodeBase.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.NodeBase.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.NodeBase.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.NodeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.NodeBase.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.NodeBase.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.NodeBase.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.NodeBase.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.NodeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.NodeBase.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.NodeBase.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.NodeBase.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---


### PythonCodeBuilder <a name="PythonCodeBuilder" id="cdk-glue-job-builder.PythonCodeBuilder"></a>

Build Python code from nodes.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.PythonCodeBuilder.Initializer"></a>

```typescript
import { PythonCodeBuilder } from 'cdk-glue-job-builder'

new PythonCodeBuilder(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.PythonCodeBuilder.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.PythonCodeBuilder.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.PythonCodeBuilder.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.PythonCodeBuilder.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.PythonCodeBuilder.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.PythonCodeBuilder.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.PythonCodeBuilder.fromAsset"></a>

```typescript
import { PythonCodeBuilder } from 'cdk-glue-job-builder'

PythonCodeBuilder.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.PythonCodeBuilder.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.PythonCodeBuilder.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.PythonCodeBuilder.fromBucket"></a>

```typescript
import { PythonCodeBuilder } from 'cdk-glue-job-builder'

PythonCodeBuilder.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.PythonCodeBuilder.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.PythonCodeBuilder.fromBucket.parameter.key"></a>

- *Type:* string

The object key.

---



### S3CatalogSource <a name="S3CatalogSource" id="cdk-glue-job-builder.S3CatalogSource"></a>

Specifies an Amazon S3 data store in the Glue Data Catalog.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.S3CatalogSource.Initializer"></a>

```typescript
import { S3CatalogSource } from 'cdk-glue-job-builder'

new S3CatalogSource(id: string, props: S3CatalogSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.S3CatalogSourceProps">S3CatalogSourceProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.S3CatalogSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.S3CatalogSource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.S3CatalogSourceProps">S3CatalogSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.S3CatalogSource.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.S3CatalogSource.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.S3CatalogSource.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.S3CatalogSource.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.S3CatalogSource.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.S3CatalogSource.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.S3CatalogSource.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.S3CatalogSource.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.generation">generation</a></code> | <code>number</code> | Generation of node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogSource.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | *No description.* |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.S3CatalogSource.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.S3CatalogSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.S3CatalogSource.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.S3CatalogSource.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.S3CatalogSource.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.S3CatalogSource.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.S3CatalogSource.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

---


### S3CatalogTarget <a name="S3CatalogTarget" id="cdk-glue-job-builder.S3CatalogTarget"></a>

Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.S3CatalogTarget.Initializer"></a>

```typescript
import { S3CatalogTarget } from 'cdk-glue-job-builder'

new S3CatalogTarget(id: string, props: S3CatalogTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.S3CatalogTargetProps">S3CatalogTargetProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.S3CatalogTarget.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.S3CatalogTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.S3CatalogTargetProps">S3CatalogTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.S3CatalogTarget.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.S3CatalogTarget.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.S3CatalogTarget.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.S3CatalogTarget.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.S3CatalogTarget.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.S3CatalogTarget.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.S3CatalogTarget.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.S3CatalogTarget.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.generation">generation</a></code> | <code>number</code> | Generation of node. |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.IDatabase</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.S3CatalogTarget.property.table">table</a></code> | <code>@aws-cdk/aws-glue-alpha.ITable</code> | *No description.* |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.S3CatalogTarget.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.S3CatalogTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.S3CatalogTarget.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.S3CatalogTarget.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.S3CatalogTarget.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---

##### `database`<sup>Required</sup> <a name="database" id="cdk-glue-job-builder.S3CatalogTarget.property.database"></a>

```typescript
public readonly database: IDatabase;
```

- *Type:* @aws-cdk/aws-glue-alpha.IDatabase

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-glue-job-builder.S3CatalogTarget.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* @aws-cdk/aws-glue-alpha.ITable

---


### ScalaCodeBuilder <a name="ScalaCodeBuilder" id="cdk-glue-job-builder.ScalaCodeBuilder"></a>

Build Scala code from nodes.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.ScalaCodeBuilder.Initializer"></a>

```typescript
import { ScalaCodeBuilder } from 'cdk-glue-job-builder'

new ScalaCodeBuilder(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.ScalaCodeBuilder.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.ScalaCodeBuilder.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.ScalaCodeBuilder.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.ScalaCodeBuilder.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.ScalaCodeBuilder.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.ScalaCodeBuilder.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.ScalaCodeBuilder.fromAsset"></a>

```typescript
import { ScalaCodeBuilder } from 'cdk-glue-job-builder'

ScalaCodeBuilder.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.ScalaCodeBuilder.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.ScalaCodeBuilder.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.ScalaCodeBuilder.fromBucket"></a>

```typescript
import { ScalaCodeBuilder } from 'cdk-glue-job-builder'

ScalaCodeBuilder.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.ScalaCodeBuilder.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.ScalaCodeBuilder.fromBucket.parameter.key"></a>

- *Type:* string

The object key.

---



### Transform <a name="Transform" id="cdk-glue-job-builder.Transform"></a>

Transforms.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.Transform.Initializer"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

new Transform()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.Transform.dropFields">dropFields</a></code> | Create a new {@link DropFields}. |

---

##### `dropFields` <a name="dropFields" id="cdk-glue-job-builder.Transform.dropFields"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

Transform.dropFields(nodeId: string, props: DropFieldsProps)
```

Create a new {@link DropFields}.

###### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.Transform.dropFields.parameter.nodeId"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.Transform.dropFields.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.DropFieldsProps">DropFieldsProps</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IGranter <a name="IGranter" id="cdk-glue-job-builder.IGranter"></a>

- *Implemented By:* <a href="#cdk-glue-job-builder.IGranter">IGranter</a>

Granter the necessary authorization to a node.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.IGranter.grant">grant</a></code> | Granting Glue job permissions. |

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.IGranter.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.IGranter.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The Glue job.

---


### INode <a name="INode" id="cdk-glue-job-builder.INode"></a>

- *Implemented By:* <a href="#cdk-glue-job-builder.CatalogSource">CatalogSource</a>, <a href="#cdk-glue-job-builder.CatalogTarget">CatalogTarget</a>, <a href="#cdk-glue-job-builder.DropFields">DropFields</a>, <a href="#cdk-glue-job-builder.NodeBase">NodeBase</a>, <a href="#cdk-glue-job-builder.S3CatalogSource">S3CatalogSource</a>, <a href="#cdk-glue-job-builder.S3CatalogTarget">S3CatalogTarget</a>, <a href="#cdk-glue-job-builder.INode">INode</a>

A node of job.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.INode.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.INode.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.INode.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.INode.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.INode.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.INode.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.INode.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

previous node.

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.INode.grant"></a>

```typescript
public grant(job: IGrantable): Grant
```

Granting Glue job permissions.

###### `job`<sup>Required</sup> <a name="job" id="cdk-glue-job-builder.INode.grant.parameter.job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The Glue job.

---

##### `python` <a name="python" id="cdk-glue-job-builder.INode.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.INode.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.INode.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.INode.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

next node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.INode.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.INode.property.name">name</a></code> | <code>string</code> | Name of node. |
| <code><a href="#cdk-glue-job-builder.INode.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.INode.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.INode.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.INode.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.INode.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of node.

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.INode.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.INode.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.INode.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

---

