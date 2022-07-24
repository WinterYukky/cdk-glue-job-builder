import { IGrantable, Grant } from 'aws-cdk-lib/aws-iam';
import { CodeFragment } from '../code-builder';
import { NodeBase } from '../node';

/**
 * Props of SelectFields.
 */
export interface SelectFieldsProps {
  /**
   * Field you want to select.
   */
  readonly fields: string[];
  /**
   * Name of node.
   *
   * @default 'Select Fields'
   */
  readonly name?: string;
}

/**
 * Transform of Select Fields.
 */
export class SelectFields extends NodeBase {
  private readonly fields: string[];
  constructor(id: string, props: SelectFieldsProps) {
    super(id, props.name ?? 'Select Fields');
    this.fields = props.fields;
  }

  python(): CodeFragment {
    if (this.inputs.length !== 1) {
      throw new Error(
        `You need to choose exactly 1 parent(s) for SelectFields Transform. Now ${this.inputs.length} parent(s).`
      );
    }
    const code = [
      `# Script generated by CDK for node ${this.name}`,
      `${this.nodeId} = SelectFields.apply(`,
      `    frame=${this.inputs[0].nodeId},`,
      `    paths=${JSON.stringify(this.fields)},`,
      `    transformation_ctx="${this.nodeId}",`,
      `)`,
    ].join('\n');
    const parent = this.inputs[0].python();
    return {
      imports: parent.imports,
      body: [...parent.body, code],
    };
  }
  scala(): CodeFragment {
    throw new Error('Method not implemented.');
  }
  grant(_grantee: IGrantable): Grant | undefined {
    return undefined;
  }
}
