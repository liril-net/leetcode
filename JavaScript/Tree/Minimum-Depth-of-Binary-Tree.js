//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  var stackNode = Array(), stackHeight = Array();
  var height = 0, min = 0;
  while (root || stackNode.length) {
    while (root) {
      height++;
      stackNode.push(root);
      stackHeight.push(height);
      root = root.left;
    }
    root = stackNode.pop();
    height = stackHeight.pop();
    if (!root.left && !root.right) {
      if (!min) min = height;
      min = Math.min(min, height);
    }
    root = root.right;
  }
  return min;
};
