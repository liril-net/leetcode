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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var path = [root];
  while (path.length) {
    var node = path.pop();
    result.push(node.val);
    if (node.right) {
      path.push(node.right);
    }
    if (node.left) {
      path.push(node.left);
    }
  }
  return result;
};