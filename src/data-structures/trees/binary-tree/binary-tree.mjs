class BinaryTree {
  root = null;

  // TODO: (bdietz) - may want to make this accept serializable data
  constructor({ root = null }) {
    this.root = root;
  }

  add(id = '', data = null) {}

  remove(id = '') {}

  isComplete() {}

  isFull() {}

  isPerfect() {}
}

export default BinaryTree;
