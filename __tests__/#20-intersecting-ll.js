const { findIntersect, LL, Node } = require('../challenges/#20-intersecting-ll');

describe('intersecting ll', () => {
  it('should find the intersecting ll node', () => {
    const commonNode = new Node(8);
    const A = new LL();
    A.head = new Node(3);
    A.head.next = new Node(7);
    A.head.next.next = commonNode;
    A.head.next.next.next = new Node(10);
    const B = new LL();
    B.head = new Node(99);
    B.head.next = new Node(1);
    B.head.next.next = commonNode;
    B.head.next.next.next = new Node(10);
    expect(findIntersect(A, B)).toEqual(8);
  });
});
