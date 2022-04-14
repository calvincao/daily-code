class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  toString() {
    return JSON.stringify(this);
  }
}

const serialize = (node) => node.toString();
const deserialize = (string) => JSON.parse(string);

module.exports = { Node, serialize, deserialize };
