import { Grant, IGrantable } from 'aws-cdk-lib/aws-iam';
import { CodeFragment } from './codenizer';

/**
 * A node of job.
 */
export interface INode {
  /**
   * ID of node.
   */
  readonly nodeId: string;
  /**
   * Name of node.
   */
  readonly name: string;
  /**
   * Input nodes (i.e parent nodes)
   */
  readonly inputs: INode[];
  /**
   * Output nodes (i.e child nodes)
   */
  readonly outputs: INode[];
  /**
   * Generation of node.
   */
  generation: number;
  /**
   * Chain from previous node.
   * @param node previous node.
   * @return this node.
   */
  from(node: INode): INode;
  /**
   * Chain to the next node.
   * @param node next node.
   * @return next node.
   */
  to(node: INode): INode;
  /**
   * Build Python code fragment.
   */
  python(): CodeFragment;
  /**
   * Build Scala code fragment.
   * @todo Scala is not support yet.
   */
  scala(): CodeFragment;
  /**
   * Granting Glue job permissions.
   * @param job The Glue job.
   */
  grant(job: IGrantable): Grant | undefined;
}

/**
 * Base of node.
 */
export abstract class NodeBase implements INode {
  private _generation: number = 1;
  private _inputs: Set<INode> = new Set();
  private _outputs: Set<INode> = new Set();
  readonly nodeId: string;
  constructor(id: string, readonly name: string) {
    const regex = new RegExp('[^A-Za-z0-9]', 'g');
    this.nodeId = `${name.replace(regex, '')}_${id}`;
  }
  get generation() {
    return this._generation;
  }
  set generation(value: number) {
    this._generation = value;
    this.outputs.forEach((output) => (output.generation = value + 1));
  }
  get inputs() {
    return Array.from(this._inputs);
  }
  get outputs() {
    return Array.from(this._outputs);
  }
  to(node: INode): INode {
    this._outputs.add(node);
    return node.from(this);
  }
  from(node: INode): INode {
    if (!node.outputs.find((output) => output.nodeId === this.nodeId)) {
      node.to(this);
    }
    this._inputs.add(node);
    if (this.generation <= node.generation) {
      this.generation = node.generation + 1;
    }
    return this;
  }
  abstract python(): CodeFragment;
  abstract scala(): CodeFragment;
  abstract grant(job: IGrantable): Grant | undefined;
}

/**
 * Granter the necessary authorization to a node.
 */
export interface IGranter {
  /**
   * Granting Glue job permissions.
   * @param job The Glue job.
   */
  grant(job: IGrantable): Grant;
}
