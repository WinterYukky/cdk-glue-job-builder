# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApplyMappingField <a name="ApplyMappingField" id="cdk-glue-job-builder.ApplyMappingField"></a>

Apply Mapping field.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.ApplyMappingField.Initializer"></a>

```typescript
import { ApplyMappingField } from 'cdk-glue-job-builder'

const applyMappingField: ApplyMappingField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ApplyMappingField.property.source">source</a></code> | <code>@aws-cdk/aws-glue-alpha.Column</code> | Source field. |
| <code><a href="#cdk-glue-job-builder.ApplyMappingField.property.target">target</a></code> | <code>@aws-cdk/aws-glue-alpha.Column</code> | Target field. |

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-glue-job-builder.ApplyMappingField.property.source"></a>

```typescript
public readonly source: Column;
```

- *Type:* @aws-cdk/aws-glue-alpha.Column

Source field.

---

##### `target`<sup>Required</sup> <a name="target" id="cdk-glue-job-builder.ApplyMappingField.property.target"></a>

```typescript
public readonly target: Column;
```

- *Type:* @aws-cdk/aws-glue-alpha.Column

Target field.

---

### ApplyMappingProps <a name="ApplyMappingProps" id="cdk-glue-job-builder.ApplyMappingProps"></a>

Props of ApplyMapping.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.ApplyMappingProps.Initializer"></a>

```typescript
import { ApplyMappingProps } from 'cdk-glue-job-builder'

const applyMappingProps: ApplyMappingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ApplyMappingProps.property.mappings">mappings</a></code> | <code><a href="#cdk-glue-job-builder.ApplyMappingField">ApplyMappingField</a>[]</code> | Field you want to select. |
| <code><a href="#cdk-glue-job-builder.ApplyMappingProps.property.name">name</a></code> | <code>string</code> | The node name. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="cdk-glue-job-builder.ApplyMappingProps.property.mappings"></a>

```typescript
public readonly mappings: ApplyMappingField[];
```

- *Type:* <a href="#cdk-glue-job-builder.ApplyMappingField">ApplyMappingField</a>[]

Field you want to select.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.ApplyMappingProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Apply Mapping'

The node name.

---

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
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.body">body</a></code> | <code>string[]</code> | The body is output between the head and tail sections. |
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.head">head</a></code> | <code>string[]</code> | Set the code to be written between the import section and body. |
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.imports">imports</a></code> | <code>string[]</code> | Import section of CodeFragment. |
| <code><a href="#cdk-glue-job-builder.CodeFragment.property.tail">tail</a></code> | <code>string[]</code> | The tail is output just before job.commit(). |

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-glue-job-builder.CodeFragment.property.body"></a>

```typescript
public readonly body: string[];
```

- *Type:* string[]
- *Default:* No body codes.

The body is output between the head and tail sections.

The ETL is written here.

---

##### `head`<sup>Optional</sup> <a name="head" id="cdk-glue-job-builder.CodeFragment.property.head"></a>

```typescript
public readonly head: string[];
```

- *Type:* string[]
- *Default:* No head codes.

Set the code to be written between the import section and body.

Functions must be defined here.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="cdk-glue-job-builder.CodeFragment.property.imports"></a>

```typescript
public readonly imports: string[];
```

- *Type:* string[]
- *Default:* No imports.

Import section of CodeFragment.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="cdk-glue-job-builder.CodeFragment.property.tail"></a>

```typescript
public readonly tail: string[];
```

- *Type:* string[]
- *Default:* No tail codes.

The tail is output just before job.commit().

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
| <code><a href="#cdk-glue-job-builder.DropFieldsProps.property.name">name</a></code> | <code>string</code> | The node name. |

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

The node name.

---

### DropNullFieldsProps <a name="DropNullFieldsProps" id="cdk-glue-job-builder.DropNullFieldsProps"></a>

Props of DropNullFields.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.DropNullFieldsProps.Initializer"></a>

```typescript
import { DropNullFieldsProps } from 'cdk-glue-job-builder'

const dropNullFieldsProps: DropNullFieldsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropNullFieldsProps.property.fields">fields</a></code> | <code><a href="#cdk-glue-job-builder.RepresentNullValue">RepresentNullValue</a>[]</code> | Field you want to drop. |
| <code><a href="#cdk-glue-job-builder.DropNullFieldsProps.property.name">name</a></code> | <code>string</code> | The node name. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="cdk-glue-job-builder.DropNullFieldsProps.property.fields"></a>

```typescript
public readonly fields: RepresentNullValue[];
```

- *Type:* <a href="#cdk-glue-job-builder.RepresentNullValue">RepresentNullValue</a>[]

Field you want to drop.

---

*Example*

```typescript
Transform.dropNullFields({
 fields: [
   RepresentNullValue.emptyString(),
   RepresentNullValue.nullString(),
 ]
})
```


##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.DropNullFieldsProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Drop Null Fields'

The node name.

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

### SelectFieldsProps <a name="SelectFieldsProps" id="cdk-glue-job-builder.SelectFieldsProps"></a>

Props of SelectFields.

#### Initializer <a name="Initializer" id="cdk-glue-job-builder.SelectFieldsProps.Initializer"></a>

```typescript
import { SelectFieldsProps } from 'cdk-glue-job-builder'

const selectFieldsProps: SelectFieldsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.SelectFieldsProps.property.fields">fields</a></code> | <code>string[]</code> | Field you want to select. |
| <code><a href="#cdk-glue-job-builder.SelectFieldsProps.property.name">name</a></code> | <code>string</code> | The node name. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="cdk-glue-job-builder.SelectFieldsProps.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Field you want to select.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-glue-job-builder.SelectFieldsProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'Select Fields'

The node name.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplyMapping <a name="ApplyMapping" id="cdk-glue-job-builder.ApplyMapping"></a>

Map fields to new names and types of your chice.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.ApplyMapping.Initializer"></a>

```typescript
import { ApplyMapping } from 'cdk-glue-job-builder'

new ApplyMapping(id: string, props: ApplyMappingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.ApplyMappingProps">ApplyMappingProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.ApplyMapping.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.ApplyMapping.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.ApplyMappingProps">ApplyMappingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.ApplyMapping.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.ApplyMapping.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.ApplyMapping.grant"></a>

```typescript
public grant(_job: IGrantable): Grant
```

Granting Glue job permissions.

###### `_job`<sup>Required</sup> <a name="_job" id="cdk-glue-job-builder.ApplyMapping.grant.parameter._job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.ApplyMapping.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.ApplyMapping.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.ApplyMapping.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.ApplyMapping.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.ApplyMapping.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.ApplyMapping.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.ApplyMapping.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.ApplyMapping.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.ApplyMapping.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.ApplyMapping.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

---


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


### Codenizer <a name="Codenizer" id="cdk-glue-job-builder.Codenizer"></a>

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.Codenizer.Initializer"></a>

```typescript
import { Codenizer } from 'cdk-glue-job-builder'

new Codenizer()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.Codenizer.python">python</a></code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.Codenizer.scala">scala</a></code> | *No description.* |

---

##### `python` <a name="python" id="cdk-glue-job-builder.Codenizer.python"></a>

```typescript
import { Codenizer } from 'cdk-glue-job-builder'

Codenizer.python(node: INode, bucket?: IBucket, objectKey?: string)
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.Codenizer.python.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.Codenizer.python.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

###### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.Codenizer.python.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

##### `scala` <a name="scala" id="cdk-glue-job-builder.Codenizer.scala"></a>

```typescript
import { Codenizer } from 'cdk-glue-job-builder'

Codenizer.scala(node: INode, bucket?: IBucket, objectKey?: string)
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.Codenizer.scala.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.Codenizer.scala.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

###### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.Codenizer.scala.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---



### CodenizerBase <a name="CodenizerBase" id="cdk-glue-job-builder.CodenizerBase"></a>

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.CodenizerBase.Initializer"></a>

```typescript
import { CodenizerBase } from 'cdk-glue-job-builder'

new CodenizerBase(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.CodenizerBase.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.CodenizerBase.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.CodenizerBase.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.CodenizerBase.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.CodenizerBase.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.CodenizerBase.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.CodenizerBase.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.CodenizerBase.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.CodenizerBase.fromAsset"></a>

```typescript
import { CodenizerBase } from 'cdk-glue-job-builder'

CodenizerBase.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.CodenizerBase.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.CodenizerBase.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.CodenizerBase.fromBucket"></a>

```typescript
import { CodenizerBase } from 'cdk-glue-job-builder'

CodenizerBase.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.CodenizerBase.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.CodenizerBase.fromBucket.parameter.key"></a>

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

Remove selected fields from your data.

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
public grant(_job: IGrantable): Grant
```

Granting Glue job permissions.

###### `_job`<sup>Required</sup> <a name="_job" id="cdk-glue-job-builder.DropFields.grant.parameter._job"></a>

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


### DropNullFields <a name="DropNullFields" id="cdk-glue-job-builder.DropNullFields"></a>

Remove fields or columns where all the values are the null objects.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.DropNullFields.Initializer"></a>

```typescript
import { DropNullFields } from 'cdk-glue-job-builder'

new DropNullFields(id: string, props: DropNullFieldsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropNullFields.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.DropNullFields.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.DropNullFieldsProps">DropNullFieldsProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.DropNullFields.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.DropNullFields.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.DropNullFieldsProps">DropNullFieldsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.DropNullFields.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.DropNullFields.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.DropNullFields.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.DropNullFields.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.DropNullFields.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.DropNullFields.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.DropNullFields.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.DropNullFields.grant"></a>

```typescript
public grant(_job: IGrantable): Grant
```

Granting Glue job permissions.

###### `_job`<sup>Required</sup> <a name="_job" id="cdk-glue-job-builder.DropNullFields.grant.parameter._job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.DropNullFields.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.DropNullFields.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.DropNullFields.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.DropNullFields.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.DropNullFields.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.DropNullFields.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.DropNullFields.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.DropNullFields.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.DropNullFields.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.DropNullFields.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.DropNullFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.DropNullFields.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.DropNullFields.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.DropNullFields.property.generation"></a>

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


### PythonCodenizer <a name="PythonCodenizer" id="cdk-glue-job-builder.PythonCodenizer"></a>

Build Python code from nodes.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.PythonCodenizer.Initializer"></a>

```typescript
import { PythonCodenizer } from 'cdk-glue-job-builder'

new PythonCodenizer(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.PythonCodenizer.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.PythonCodenizer.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.PythonCodenizer.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.PythonCodenizer.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.PythonCodenizer.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.PythonCodenizer.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.PythonCodenizer.fromAsset"></a>

```typescript
import { PythonCodenizer } from 'cdk-glue-job-builder'

PythonCodenizer.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.PythonCodenizer.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.PythonCodenizer.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.PythonCodenizer.fromBucket"></a>

```typescript
import { PythonCodenizer } from 'cdk-glue-job-builder'

PythonCodenizer.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.PythonCodenizer.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.PythonCodenizer.fromBucket.parameter.key"></a>

- *Type:* string

The object key.

---



### RepresentNullValue <a name="RepresentNullValue" id="cdk-glue-job-builder.RepresentNullValue"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.emptyString">emptyString</a></code> | Empty String ("" or ''). |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.integer">integer</a></code> | Create a new {@link RepresentNullValue} from number value. |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.minusOne">minusOne</a></code> | -1 Integer. |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.nullString">nullString</a></code> | "null" String. |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.string">string</a></code> | Create a new {@link RepresentNullValue} from string value. |

---

##### `emptyString` <a name="emptyString" id="cdk-glue-job-builder.RepresentNullValue.emptyString"></a>

```typescript
import { RepresentNullValue } from 'cdk-glue-job-builder'

RepresentNullValue.emptyString()
```

Empty String ("" or '').

##### `integer` <a name="integer" id="cdk-glue-job-builder.RepresentNullValue.integer"></a>

```typescript
import { RepresentNullValue } from 'cdk-glue-job-builder'

RepresentNullValue.integer(value: number)
```

Create a new {@link RepresentNullValue} from number value.

###### `value`<sup>Required</sup> <a name="value" id="cdk-glue-job-builder.RepresentNullValue.integer.parameter.value"></a>

- *Type:* number

represent null value.

---

##### `minusOne` <a name="minusOne" id="cdk-glue-job-builder.RepresentNullValue.minusOne"></a>

```typescript
import { RepresentNullValue } from 'cdk-glue-job-builder'

RepresentNullValue.minusOne()
```

1 Integer.

##### `nullString` <a name="nullString" id="cdk-glue-job-builder.RepresentNullValue.nullString"></a>

```typescript
import { RepresentNullValue } from 'cdk-glue-job-builder'

RepresentNullValue.nullString()
```

"null" String.

##### `string` <a name="string" id="cdk-glue-job-builder.RepresentNullValue.string"></a>

```typescript
import { RepresentNullValue } from 'cdk-glue-job-builder'

RepresentNullValue.string(value: string)
```

Create a new {@link RepresentNullValue} from string value.

###### `value`<sup>Required</sup> <a name="value" id="cdk-glue-job-builder.RepresentNullValue.string.parameter.value"></a>

- *Type:* string

represent null value.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.property.type">type</a></code> | <code><a href="#cdk-glue-job-builder.RepresentNullType">RepresentNullType</a></code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.RepresentNullValue.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-glue-job-builder.RepresentNullValue.property.type"></a>

```typescript
public readonly type: RepresentNullType;
```

- *Type:* <a href="#cdk-glue-job-builder.RepresentNullType">RepresentNullType</a>

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-glue-job-builder.RepresentNullValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

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


### ScalaCodenizer <a name="ScalaCodenizer" id="cdk-glue-job-builder.ScalaCodenizer"></a>

Build Scala code from nodes.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.ScalaCodenizer.Initializer"></a>

```typescript
import { ScalaCodenizer } from 'cdk-glue-job-builder'

new ScalaCodenizer(node: INode, bucket?: IBucket, objectKey?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.node">node</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a></code> | The Node you want to build. |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Built code save S3 bucket. |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.objectKey">objectKey</a></code> | <code>string</code> | Built code save S3 object key. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

The Node you want to build.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* generate a new Bucket

Built code save S3 bucket.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="cdk-glue-job-builder.ScalaCodenizer.Initializer.parameter.objectKey"></a>

- *Type:* string
- *Default:* generate a object key

Built code save S3 object key.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.bind">bind</a></code> | Called when the Job is initialized to allow this object to bind. |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.codenize">codenize</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="cdk-glue-job-builder.ScalaCodenizer.bind"></a>

```typescript
public bind(scope: Construct, grantable: IGrantable): CodeConfig
```

Called when the Job is initialized to allow this object to bind.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-glue-job-builder.ScalaCodenizer.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grantable`<sup>Required</sup> <a name="grantable" id="cdk-glue-job-builder.ScalaCodenizer.bind.parameter.grantable"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `codenize` <a name="codenize" id="cdk-glue-job-builder.ScalaCodenizer.codenize"></a>

```typescript
public codenize(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.fromAsset">fromAsset</a></code> | Job code from a local disk path. |
| <code><a href="#cdk-glue-job-builder.ScalaCodenizer.fromBucket">fromBucket</a></code> | Job code as an S3 object. |

---

##### `fromAsset` <a name="fromAsset" id="cdk-glue-job-builder.ScalaCodenizer.fromAsset"></a>

```typescript
import { ScalaCodenizer } from 'cdk-glue-job-builder'

ScalaCodenizer.fromAsset(path: string, options?: AssetOptions)
```

Job code from a local disk path.

###### `path`<sup>Required</sup> <a name="path" id="cdk-glue-job-builder.ScalaCodenizer.fromAsset.parameter.path"></a>

- *Type:* string

code file (not a directory).

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-glue-job-builder.ScalaCodenizer.fromAsset.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3_assets.AssetOptions

---

##### `fromBucket` <a name="fromBucket" id="cdk-glue-job-builder.ScalaCodenizer.fromBucket"></a>

```typescript
import { ScalaCodenizer } from 'cdk-glue-job-builder'

ScalaCodenizer.fromBucket(bucket: IBucket, key: string)
```

Job code as an S3 object.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-glue-job-builder.ScalaCodenizer.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket.

---

###### `key`<sup>Required</sup> <a name="key" id="cdk-glue-job-builder.ScalaCodenizer.fromBucket.parameter.key"></a>

- *Type:* string

The object key.

---



### SelectFields <a name="SelectFields" id="cdk-glue-job-builder.SelectFields"></a>

Choose which fields you want from your data.

#### Initializers <a name="Initializers" id="cdk-glue-job-builder.SelectFields.Initializer"></a>

```typescript
import { SelectFields } from 'cdk-glue-job-builder'

new SelectFields(id: string, props: SelectFieldsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.SelectFields.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.SelectFields.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-glue-job-builder.SelectFieldsProps">SelectFieldsProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.SelectFields.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.SelectFields.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.SelectFieldsProps">SelectFieldsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.SelectFields.from">from</a></code> | Chain from previous node. |
| <code><a href="#cdk-glue-job-builder.SelectFields.grant">grant</a></code> | Granting Glue job permissions. |
| <code><a href="#cdk-glue-job-builder.SelectFields.python">python</a></code> | Build Python code fragment. |
| <code><a href="#cdk-glue-job-builder.SelectFields.scala">scala</a></code> | Build Scala code fragment. |
| <code><a href="#cdk-glue-job-builder.SelectFields.to">to</a></code> | Chain to the next node. |

---

##### `from` <a name="from" id="cdk-glue-job-builder.SelectFields.from"></a>

```typescript
public from(node: INode): INode
```

Chain from previous node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.SelectFields.from.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---

##### `grant` <a name="grant" id="cdk-glue-job-builder.SelectFields.grant"></a>

```typescript
public grant(_job: IGrantable): Grant
```

Granting Glue job permissions.

###### `_job`<sup>Required</sup> <a name="_job" id="cdk-glue-job-builder.SelectFields.grant.parameter._job"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `python` <a name="python" id="cdk-glue-job-builder.SelectFields.python"></a>

```typescript
public python(): CodeFragment
```

Build Python code fragment.

##### `scala` <a name="scala" id="cdk-glue-job-builder.SelectFields.scala"></a>

```typescript
public scala(): CodeFragment
```

Build Scala code fragment.

##### `to` <a name="to" id="cdk-glue-job-builder.SelectFields.to"></a>

```typescript
public to(node: INode): INode
```

Chain to the next node.

###### `node`<sup>Required</sup> <a name="node" id="cdk-glue-job-builder.SelectFields.to.parameter.node"></a>

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-glue-job-builder.SelectFields.property.inputs">inputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Input nodes (i.e parent nodes). |
| <code><a href="#cdk-glue-job-builder.SelectFields.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.SelectFields.property.nodeId">nodeId</a></code> | <code>string</code> | ID of node. |
| <code><a href="#cdk-glue-job-builder.SelectFields.property.outputs">outputs</a></code> | <code><a href="#cdk-glue-job-builder.INode">INode</a>[]</code> | Output nodes (i.e child nodes). |
| <code><a href="#cdk-glue-job-builder.SelectFields.property.generation">generation</a></code> | <code>number</code> | Generation of node. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-glue-job-builder.SelectFields.property.inputs"></a>

```typescript
public readonly inputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Input nodes (i.e parent nodes).

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-glue-job-builder.SelectFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="cdk-glue-job-builder.SelectFields.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

ID of node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-glue-job-builder.SelectFields.property.outputs"></a>

```typescript
public readonly outputs: INode[];
```

- *Type:* <a href="#cdk-glue-job-builder.INode">INode</a>[]

Output nodes (i.e child nodes).

---

##### `generation`<sup>Required</sup> <a name="generation" id="cdk-glue-job-builder.SelectFields.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Generation of node.

Generation of node.

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
| <code><a href="#cdk-glue-job-builder.Transform.applyMapping">applyMapping</a></code> | Create a new {@link ApplyMapping}. |
| <code><a href="#cdk-glue-job-builder.Transform.dropFields">dropFields</a></code> | Create a new {@link DropFields}. |
| <code><a href="#cdk-glue-job-builder.Transform.dropNullFields">dropNullFields</a></code> | Create a new {@link DropNullFields}. |
| <code><a href="#cdk-glue-job-builder.Transform.selectFields">selectFields</a></code> | Create a new {@link SelectFields}. |

---

##### `applyMapping` <a name="applyMapping" id="cdk-glue-job-builder.Transform.applyMapping"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

Transform.applyMapping(id: string, props: ApplyMappingProps)
```

Create a new {@link ApplyMapping}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.Transform.applyMapping.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.Transform.applyMapping.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.ApplyMappingProps">ApplyMappingProps</a>

---

##### `dropFields` <a name="dropFields" id="cdk-glue-job-builder.Transform.dropFields"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

Transform.dropFields(id: string, props: DropFieldsProps)
```

Create a new {@link DropFields}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.Transform.dropFields.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.Transform.dropFields.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.DropFieldsProps">DropFieldsProps</a>

---

##### `dropNullFields` <a name="dropNullFields" id="cdk-glue-job-builder.Transform.dropNullFields"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

Transform.dropNullFields(id: string, props: DropNullFieldsProps)
```

Create a new {@link DropNullFields}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.Transform.dropNullFields.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.Transform.dropNullFields.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.DropNullFieldsProps">DropNullFieldsProps</a>

---

##### `selectFields` <a name="selectFields" id="cdk-glue-job-builder.Transform.selectFields"></a>

```typescript
import { Transform } from 'cdk-glue-job-builder'

Transform.selectFields(id: string, props: SelectFieldsProps)
```

Create a new {@link SelectFields}.

###### `id`<sup>Required</sup> <a name="id" id="cdk-glue-job-builder.Transform.selectFields.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-glue-job-builder.Transform.selectFields.parameter.props"></a>

- *Type:* <a href="#cdk-glue-job-builder.SelectFieldsProps">SelectFieldsProps</a>

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

- *Implemented By:* <a href="#cdk-glue-job-builder.ApplyMapping">ApplyMapping</a>, <a href="#cdk-glue-job-builder.CatalogSource">CatalogSource</a>, <a href="#cdk-glue-job-builder.CatalogTarget">CatalogTarget</a>, <a href="#cdk-glue-job-builder.DropFields">DropFields</a>, <a href="#cdk-glue-job-builder.DropNullFields">DropNullFields</a>, <a href="#cdk-glue-job-builder.NodeBase">NodeBase</a>, <a href="#cdk-glue-job-builder.S3CatalogSource">S3CatalogSource</a>, <a href="#cdk-glue-job-builder.S3CatalogTarget">S3CatalogTarget</a>, <a href="#cdk-glue-job-builder.SelectFields">SelectFields</a>, <a href="#cdk-glue-job-builder.INode">INode</a>

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

## Enums <a name="Enums" id="Enums"></a>

### RepresentNullType <a name="RepresentNullType" id="cdk-glue-job-builder.RepresentNullType"></a>

Type representing a null value.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-glue-job-builder.RepresentNullType.STRING">STRING</a></code> | *No description.* |
| <code><a href="#cdk-glue-job-builder.RepresentNullType.INTEGER">INTEGER</a></code> | *No description.* |

---

##### `STRING` <a name="STRING" id="cdk-glue-job-builder.RepresentNullType.STRING"></a>

---


##### `INTEGER` <a name="INTEGER" id="cdk-glue-job-builder.RepresentNullType.INTEGER"></a>

---

