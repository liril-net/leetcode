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
var postorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var path = [root];
  var pre = null;
  while (path.length) {
    var p = path[path.length - 1];
    if ((!p.left && !p.right) || (pre && (pre === p.left || pre === p.right))) {
      result.push(p.val);
      path.pop();
      pre = p;
    } else {
      if (p.right) {
        path.push(p.right);
      }
      if (p.left) {
        path.push(p.left);
      }
    }
  }
  return result;
};