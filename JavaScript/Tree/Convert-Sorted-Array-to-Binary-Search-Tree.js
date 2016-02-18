//
// Copyright (c) 2016 by liril.net. All Rights Reserved.
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var build = function(head, tail) {
    if (head >= tail) {
      return null;
    }
    var mid = head + Math.floor((tail - head) / 2);
    var node = new TreeNode(nums[mid]);
    node.left = build(head, mid);
    node.right = build(mid + 1, tail);
    return node;
  };
  return build(0, nums.length);
};