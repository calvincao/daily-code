/**
 * given the root of the tree, count the number of universal trees (all nodes under it have the same value)
 */

const univalTree = (root) => {
  // use dfs to check if each node is a unival tree
  let numUnivalTrees = 0;
  const dfs = (node) => {
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    isUnival(node);
  };
  const isUnival = (node) => {
    if (node === null) return true;
    if (node.left && node.left.value !== node.value) return false;
    if (node.right && node.right.value !== node.value) return false;
    if (isUnival(node.left) && isUnival(node.right)) return true;
    return false;
  };
  dfs(root);
  return numUnivalTrees;
};

module.exports = { univalTree };
