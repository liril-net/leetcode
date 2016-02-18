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
var inorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var path = [];
  var p = root;
  while (p || path.length) {
    while (p) {
      path.push(p);
      p = p.left;
    }
    if (path.length) {
      p = path.pop();
      result.push(p.val);
      p = p.right;
    }
  }
  return result;
};