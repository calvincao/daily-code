/**
 * Design a binary tree locking feature. A tree node can be locked or unlocked only if all its descendants
 * A node can be locked or unlocked only if all of its decsendants or ancestors are not locked
 * Design a binary tree node class with the following methods:
 * is_locked: returns whether the node is locked
 * lock: tries to lock the tree node. if attempt fails, returns false, otherwise, return true when successful
 * unlock: tries to unlock the tree node. if fails, return false, otherwise return true
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.locked = false;
  }
  add(val) {
    const newNode = new Node(val);
    const currNode = this;
    function traverse(node) {
      if (node === null) node = newNode;
      if (val > node.val) {
        traverse(node.val.right);
      }
      if (val < node.val) {
        traverse(node.val.left);
      }
    }
    traverse(currNode);
  }
}

const bst = new Node(5);
console.log(bst);
bst.add(6);
bst.add(7);
console.log(bst);
