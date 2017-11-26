const depthFirstTraverse = _node => {
  let stack = [_node];
  let currentNode = null;

  while (stack.length) {
    currentNode = stack.pop();
    callback(currentNode);

    if (currentNode.children) {
      for (
        let childIndex = 0;
        childIndex < currentNode.children.length;
        childIndex++
      ) {
        stack.push(currentNode.children[childIndex]);
      }
    }
  }
};

const breadthFirstTraverse = _node => {
  let queue = [_node];
  let currentNode = null;

  while (queue.length) {
    currentNode = queue.shift();
    callback(currentNode);
    if (currentNode.children) {
      for (
        let childIndex = 0;
        childIndex < currentNode.children.length;
        childIndex++
      ) {
        queue.push(currentNode.children[childIndex]);
      }
    }
  }
};
