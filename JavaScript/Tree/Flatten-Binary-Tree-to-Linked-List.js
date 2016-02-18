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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root) {
    var queue = [root];
    var n = new TreeNode(0);
    while (queue.length) {
      var node = queue.pop();
      n.right = node;
      n = node;
      if (node.right) {
        queue.push(node.right);
        node.right = null;
      }
      if (node.left) {
        queue.push(node.left);
        node.left = null;
      }
    }
  }
};