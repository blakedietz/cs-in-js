import BinarySearchTreeNode from './binary-search-tree-node';
import * as traversals from './traversal.implementation';

export const TRAVERSAL_TYPES = {
  IN_ORDER: 'inOrder',
  PRE_ORDER: 'preOrder',
  POST_ORDER: 'postOrder'
};

/**
 *
 */
class BinarySearchTree {
  root = null;
  // TODO: (bdietz) #language-enhancement - would be cool to use private fields to encapsulate this a bit more at some point in the future
  nodeComparator = (nodeA, nodeB) => nodeA.key > nodeB.Key;

  constructor({ root: root = null, nodeComparator } = {}) {
    this.root = root;
    this.nodeComparator = nodeComparator || this.nodeComparator;
  }

  insert(key = '', data = null) {
    const newNodeToInsert = new BinarySearchTreeNode({ key, data });

    // TODO: (bdietz) #performance-improvement - investigate tail recursive alternative
    const recursiveInsert = (currentBinaryTreeNode, nodeToInsert) => {
      const newNodeIsLessThanOrEqualToCurrent =
        this.root === null
          ? false
          : this.nodeComparator(nodeToInsert, currentBinaryTreeNode) <= 0;

      // Tree is empty node can be inserted
      if (this.root === null) {
        this.root = nodeToInsert;
        // Insert to the left of the current node
      } else if (newNodeIsLessThanOrEqualToCurrent) {
        // There's nothing on the current node's left branch so we insert the new node into the left branch.
        if (currentBinaryTreeNode.left === null) {
          currentBinaryTreeNode.setLeft(newNodeToInsert);
          // Go further because the left node is not empty. Tree to search is now n / 2 in size.
        } else {
          recursiveInsert(currentBinaryTreeNode.left, nodeToInsert);
        }
        // The new node is greater than the current node in the tree; insert to the right of the current node.
      } else {
        // There's nothing on the current node's right branch
        if (currentBinaryTreeNode.right === null) {
          currentBinaryTreeNode.setRight(newNodeToInsert);
          // Go further because the right node is not empty. Tree to search is now n / 2 in size.
        } else {
          recursiveInsert(currentBinaryTreeNode.right, nodeToInsert);
        }
      }
    };

    recursiveInsert(this.root, newNodeToInsert);
  }

  // TODO: (bdietz) - lol, probably need to be able to search a search tree
  search() {}

  // TODO: (bdietz) #alternative-implementation - would be interesting to see what a traversal looks like that can be controlled with a generator/iterator
  traverse(
    uponVisit = node => console.log(node),
    typeOfTraversal = TRAVERSAL_TYPES.IN_ORDER
  ) {
    switch (typeOfTraversal) {
      case TRAVERSAL_TYPES.IN_ORDER:
        traversals.inOrderTraversal(this.root, uponVisit);
        break;
      case TRAVERSAL_TYPES.POST_ORDER:
        traversals.postOrderTraversal(this.root, uponVisit);
        break;
      case TRAVERSAL_TYPES.PRE_ORDER:
        traversals.preOrderTraversal(this.root, uponVisit);
        break;
      default:
        throw new Error(
          `The given typeOfTravesal value of ${
            typeOfTraversal
          } is not supported. Please provide one of the following ${Object.values(
            typeOfTraversal
          ).join(',')}`
        );
    }
  }

  remove(key = '') {}

  isComplete() {}

  isFull() {}

  isPerfect() {}
}

export default BinarySearchTree;
