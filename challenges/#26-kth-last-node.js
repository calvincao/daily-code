/**
 * given a singly linked list and an integer k, remove the kth to the last element of the linked list
 * do this in a single pass. k is guaranteed to be less than the length of the linked list
 *
 * create 2 pointers k + 1 nodes apart (hare & turtle)
 * once rabbit has reached pass the last node (null), remove the node turtle is on and stitch the ll back together.
 */

function LL() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

function kthLast(ll, k) {
  let hare = ll.head;
  let turtle = ll.head;
  for (let i = 0; i < k + 1; i++) {
    hare = hare.next;
  }
  while (hare !== null) {
    hare = hare.next;
    turtle = turtle.next;
  }
  const kthNode = turtle.next;
  turtle.next = turtle.next.next;
  kthNode = null;
}

module.exports = { kthLast, Node, LL };
