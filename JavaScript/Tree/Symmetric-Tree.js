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
var isSymmetric = function(root) {
  var judge = function(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    return (left.val === right.val) && judge(left.left, right.right) &&
           judge(left.right, right.left);
  }
  if (!root) {
    return true;
  } else {
    return judge(root.left, root.right);
  }
};
