const { Node, serialize, deserialize } = require('../challenges/#3-serialize-bst');

describe('serialize BST test', () => {
  it('correctly serializes and deserializes a BST', () => {
    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    input = deserialize(serialize(node)).left.left.val;
    output = 'left.left';
    expect(input).toEqual(output);
  });
});
