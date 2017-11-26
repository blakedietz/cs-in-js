// TODO: (bdietz) #alternative-implementation - could also show how a stack could be used instead of a recursive solution
const preOrderTraversal = (treeRoot, uponVisit) => {
  const recursivePreOrderTraversal = treeNode => {
    // Base case, terminate the call stack
    if (treeNode === null) {
      return;
    } else {
      uponVisit(treeNode);
      recursivePreOrderTraversal(treeNode.left);
      recursivePreOrderTraversal(treeNode.right);
    }
  };

  recursivePreOrderTraversal(treeRoot);
};

const inOrderTraversal = (treeRoot, uponVisit) => {};

const postOrderTraversal = (treeRoot, uponVisit) => {};

export { preOrderTraversal, inOrderTraversal, postOrderTraversal };
