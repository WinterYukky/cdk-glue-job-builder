import { Schema } from '@aws-cdk/aws-glue-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Transform } from '../../src';
import { SomeNode } from '../node.test';

describe('ApplyMapping', () => {
  test('Must be able to specify name', () => {
    const defaultName = Transform.applyMapping('node1', {
      mappings: [],
    });
    const specifyName = Transform.applyMapping('node2', {
      name: 'Specify Name',
      mappings: [],
    });
    expect(defaultName.name).toBe('Apply Mapping');
    expect(specifyName.name).toBe('Specify Name');
  });

  test('If not provide granter and grant then not throw error', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack');
    const applyMapping = Transform.applyMapping('node1', {
      mappings: [],
    });
    applyMapping.grant(
      new Role(stack, 'Role', {
        assumedBy: new ServicePrincipal('glue.amazonaws.com'),
      })
    );
  });

  test('No inputs and build then python throw error', () => {
    const applyMapping = Transform.applyMapping('node1', {
      mappings: [],
    });
    expect(() => applyMapping.python()).toThrow(
      'You need to choose exactly 1 parent(s) for ApplyMapping Transform.'
    );
  });

  test('2 inputs and build then python throw error', () => {
    const applyMapping = Transform.applyMapping('node1', {
      mappings: [],
    });
    new SomeNode('Input1').to(applyMapping);
    new SomeNode('Input2').to(applyMapping);
    expect(() => applyMapping.python()).toThrow(
      'You need to choose exactly 1 parent(s) for ApplyMapping Transform.'
    );
  });

  test('Python should build code', () => {
    const applyMapping = Transform.applyMapping('node1', {
      mappings: [
        {
          source: { name: 'type_change', type: Schema.STRING },
          target: { name: 'type_change', type: Schema.INTEGER },
        },
        {
          source: { name: 'name_change', type: Schema.STRING },
          target: { name: 'renamed', type: Schema.STRING },
        },
      ],
    });
    const prevNode = new SomeNode('prev_node');
    prevNode.to(applyMapping);
    const code = applyMapping.python();
    expect(code.imports).toStrictEqual([]);
    expect(code.body).toStrictEqual([
      `# Script generated by CDK for node Apply Mapping
ApplyMapping_node1 = ApplyMapping.apply(
    frame=SomeNode_prev_node,
    mappings=[
        ("type_change", "string", "type_change", "int"),
        ("name_change", "string", "renamed", "string"),
    ],
    transformation_ctx=\"ApplyMapping_node1\",
)`,
    ]);
  });

  test('Scala not implement', () => {
    const applyMapping = Transform.applyMapping('ApplyMapping', {
      mappings: [],
    });
    const prevNode = new SomeNode('prev_node');
    prevNode.to(applyMapping);
    expect(() => applyMapping.scala()).toThrow();
  });
});
