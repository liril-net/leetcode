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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null;
  if (lists.length === 1) {
    return lists[0];
  } else if (lists.length === 2) {
    let left = lists[0];
    let right = lists[1];

    let start = {
      next: left
    };
    let prev = start;
    while (left && right) {
      if (left.val < right.val) {
        if (left.next) {
          prev = prev.next;
          left = left.next;
        } else {
          left.next = right;
          prev = right;
          left = null;
          break;
        }
      } else {
        prev.next = right;
        right = right.next;
        prev.next.next = left;
        prev = prev.next;
      }
    }

    if (left && prev !== left) prev.next = left;
    if (right && prev !== right) prev.next = right;

    return start.next;
  } else {
    const half = Math.floor(lists.length / 2);
    return mergeKLists([
      mergeKLists(lists.slice(0, half)),
      mergeKLists(lists.slice(half))
    ]);
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let result = mergeKLists([
  mergeKLists([new ListNode(9), new ListNode(1), new ListNode(5)]),
  mergeKLists([
    mergeKLists([new ListNode(9), new ListNode(1), new ListNode(5)]),
    mergeKLists([new ListNode(7), new ListNode(2), new ListNode(6)])
  ])
]);

while (result) {
  console.log(result.val);
  result = result.next;
}
