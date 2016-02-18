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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  var DFS = function(node, total) {
    if (!node) return false;
    total += node.val;
    if (!node.left && !node.right) {
      return (total === sum);
    }
    return DFS(node.left, total) || DFS(node.right, total);
  };
  return DFS(root, 0);
};