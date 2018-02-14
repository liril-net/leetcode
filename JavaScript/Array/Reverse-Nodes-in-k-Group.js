//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k <= 0) return head;
  let start = {
    next: head
  };
  let begin = start;
  let pointer = head;
  let i = 0;
  while (head) {
    if (++i < k) {
      head = head.next;
    } else {
      i = 0;
      const next = head.next;
      while (pointer.next !== next) {
        const temp = pointer.next;
        pointer.next = temp.next;
        temp.next = begin.next;
        begin.next = temp;
      }
      begin = pointer;
      head = next;
      pointer = next;
    }
  }
  return start.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let start = reverseKGroup(n1, 6);
while (start) {
  console.log(start.val);
  start = start.next;
}
