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
 * @return {boolean}
 */
var isBalanced = function(root) {
  var getHeight = function(tree) {
    if (!tree) return 0;
    var left = getHeight(tree.left);
    var right = getHeight(tree.right);
    if (left < 0 || right < 0 || Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  };
  if (!root) return true;
  if (getHeight(root) === -1) return false;
  return true;
};

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// var root = new TreeNode(1);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(3);

// console.log(isBalanced(root));