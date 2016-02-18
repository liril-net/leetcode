//
// Copyright (c) 2016 by liril.net. All Rights Reserved.
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  var build = function(head, tail) {
    if (head === tail) {
      return null;
    }

    var slow = head;
    var fast = head;
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    var node = new TreeNode(slow.val);
    node.left = build(head, slow);
    node.right = build(slow.next, tail);
    return node;
  };
  return build(head, null);
};