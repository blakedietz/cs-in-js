import BinarySearchTree, { TRAVERSAL_TYPES } from './binary-search-tree';

describe('Insert', () => {
  test('Root node is the node that is inserted when empty', () => {
    const binarySearchTree = new BinarySearchTree();
    const key = 'a';
    const data = { foo: 'bar' };

    binarySearchTree.insert(key, data);

    expect(binarySearchTree.root.data).toEqual(data);
  });

  test('Keeps ordering when inserting', () => {
    const binarySearchTree = new BinarySearchTree();
    const nodeArguments = ['b', 'a', 'c'].map(letter => [letter, { letter }]);
    const expectedOrdering = ['b', 'a', 'c'];

    nodeArguments.forEach(nodeArgument => {
      binarySearchTree.insert(...nodeArgument);
    });

    function* traversalTests() {
      for (let index = 0; index < expectedOrdering.length; index++) {
        yield expectedOrdering[index];
      }
    }

    const generator = traversalTests();

    binarySearchTree.traverse(node => {
      expect(node.key).toEqual(generator.next().value);
    }, TRAVERSAL_TYPES.PRE_ORDER);
  });
});
