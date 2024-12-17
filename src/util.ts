import { TSESTree } from '@typescript-eslint/utils';

export const nodeHasDecoratorsNamed = (
  node: TSESTree.ClassDeclaration | TSESTree.PropertyDefinition | TSESTree.MethodDefinition,
  decoratorNames: string[]
): boolean => {
  const decorators = getDecoratorsNamed(node, decoratorNames);

  return decorators.length > 0;
};

const getDecoratorsNamed = (
  node: TSESTree.ClassDeclaration | TSESTree.PropertyDefinition | TSESTree.MethodDefinition,
  decoratorNames: string[]
): TSESTree.Decorator[] => {
  const decorators = node.decorators?.filter((decorator) => {
    const factoryMethodDecoratorIdentifier = (
      (decorator.expression as TSESTree.CallExpression).callee as TSESTree.Identifier
    )?.name;
    const decoratorIdentifier = (decorator.expression as TSESTree.Identifier)?.name;

    return decoratorNames.includes(factoryMethodDecoratorIdentifier ?? decoratorIdentifier ?? '');
  });

  return decorators || [];
};
