const { univalTree } = require('../challenges/#8-unival-tree');

describe('univalTree test', () => {
  function BST() {
    this.root = null;
  }
  function Node(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
  const bst = new BST();
  const root = new Node(0);
  bst.root = root;
  bst.root.left = new Node(1);
  bst.root.right = new Node(0);
  bst.root.right.left = new Node(1);
  bst.root.right.right = new Node(0);
  bst.root.right.left.left = new Node(1);
  bst.root.right.left.right = new Node(1);
  /**
   *     0
   *    / \
   *   1   0
   *      / \
   *     1   0
   *    / \
   *   1   1
   */
  it('passes the example case', () => {
    expect(univalTree(bst.root)).toEqual(5);
  });
});
