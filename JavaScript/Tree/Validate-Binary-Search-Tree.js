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
var isValidBST = function(root) {
  var valid = function(node, min, max) {
    if (!node) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return (valid(node.left, min, node.val) &&
            valid(node.right, node.val, max));
  };
  return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};