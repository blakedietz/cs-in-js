class BinarySearchTreeNode {
  left = null;

  right = null;
  // An optional piece of information
  parent = null;
  data = null;

  constructor({
    left = null,
    right = null,
    parent = null,
    data = null,
    key = ''
  }) {
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.data = data;
    this.key = key;
  }

  setRight(right = null) {
    if (right instanceof BinarySearchTreeNode) {
      this.right = right;
    } else {
      throw new Error(
        'The provided argument right was not of type BinaryTreeNode'
      );
    }
  }

  setLeft(left = null) {
    if (left instanceof BinarySearchTreeNode) {
      this.left = left;
    } else {
      throw new Error(
        'The provided argument left was not of type BinaryTreeNode'
      );
    }
  }

  /**
   * Determines whether or not the given node is a leaf node.
   * A node that is a leaf node does not have any children.
   *
   * @return {boolean}
   */
  isLeaf() {
    return !this.left && !this.right;
  }
}

export default BinarySearchTreeNode;
