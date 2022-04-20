/**
 * Given 2 ll that intersect at some point, find the intersecting node. the lists are non-cycling
 * example: A= 3 -> 7 -> 8 -> 10
 *          B= 99 -> 1 -> 8 -> 10
 * return the node with value 8
 * do this in O(M + N) where N & M are the lenghts of the lists
 *
 * INPUT: 2 linked lists with an intersecting node
 * OUTPUT: intersecting node
 *
 * psuedocode:
 * create an object to memorize the values of list 1
 * iterate through list 2 and use key value lookup (0(1)) to see if value exist in object
 * when it does, return that value(node)
 * return false if value is not found for some reason
 */

const findIntersect = (ll1, ll2) => {
  const cache = new Map();
  let currNode1 = ll1.head;
  while (currNode1) {
    cache.set(currNode1, currNode1.val);
    currNode1 = currNode1.next;
  }

  let currNode2 = ll2.head;
  while (currNode2) {
    if (cache.has(currNode2)) return currNode2.val;
    currNode2 = currNode2.next;
  }

  return false;
};

function LL() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

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
console.assert(findIntersect(A, B), 8);

module.exports = { findIntersect, LL, Node };
