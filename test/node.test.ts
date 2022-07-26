import { IGrantable, Grant } from 'aws-cdk-lib/aws-iam';
import { NodeBase, CodeFragment } from '../src';

export class SomeNode extends NodeBase {
  constructor(id: string, private readonly code?: CodeFragment) {
    super(id, 'SomeNode');
  }
  python(): CodeFragment {
    return this.code ?? {};
  }
  scala(): CodeFragment {
    throw this.code ?? {};
  }
  grant(_grantee: IGrantable): Grant | undefined {
    throw new Error('Method not implemented.');
  }
}

describe('NodeBase', () => {
  test('Number of generations should increase.', () => {
    const node1 = new SomeNode('node1');
    const node2 = new SomeNode('node2');
    const node3 = new SomeNode('node3');
    node1.to(node2).to(node3);
    expect(node1.generation).toBe(1);
    expect(node2.generation).toBe(2);
    expect(node3.generation).toBe(3);

    expect(node1.inputs).toStrictEqual([]);
    expect(node2.inputs).toStrictEqual([node1]);
    expect(node3.inputs).toStrictEqual([node2]);

    expect(node1.outputs).toStrictEqual([node2]);
    expect(node2.outputs).toStrictEqual([node3]);
    expect(node3.outputs).toStrictEqual([]);
  });

  test('If merged, the number of generations must also be merged.', () => {
    const node1 = new SomeNode('node1');
    const node2 = new SomeNode('node2');
    const node3 = new SomeNode('node3');
    const node4 = new SomeNode('node4');
    const node5 = new SomeNode('node5');
    const node6 = new SomeNode('node6');
    node1.to(node2).to(node3);
    node4.to(node5).to(node6);
    node2.from(node6);
    expect(node1.generation).toBe(1);
    expect(node2.generation).toBe(4);
    expect(node3.generation).toBe(5);
    expect(node4.generation).toBe(1);
    expect(node5.generation).toBe(2);
    expect(node6.generation).toBe(3);

    expect(node1.inputs).toStrictEqual([]);
    expect(node2.inputs).toStrictEqual([node1, node6]);
    expect(node3.inputs).toStrictEqual([node2]);
    expect(node4.inputs).toStrictEqual([]);
    expect(node5.inputs).toStrictEqual([node4]);
    expect(node6.inputs).toStrictEqual([node5]);

    expect(node1.outputs).toStrictEqual([node2]);
    expect(node2.outputs).toStrictEqual([node3]);
    expect(node3.outputs).toStrictEqual([]);
    expect(node4.outputs).toStrictEqual([node5]);
    expect(node5.outputs).toStrictEqual([node6]);
    expect(node6.outputs).toStrictEqual([node2]);
  });
});
