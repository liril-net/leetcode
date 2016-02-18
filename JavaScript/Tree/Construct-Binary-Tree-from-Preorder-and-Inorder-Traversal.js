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

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  var map = {};
  var len = inorder.length;
  for (var i = 0; i < len; i++) {
    map[inorder[i]] = i;
  }

  var build = function(pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd || iStart > iEnd) {
      return null;
    }
    if (iStart === iEnd) {
      return new TreeNode(inorder[iStart]);
    }
    var root = preorder[pStart];
    var node = new TreeNode(root);
    var index = map[root];
    node.left = build(pStart + 1, pStart + index - iStart, iStart, index - 1);
    node.right = build(pStart + index - iStart + 1, pEnd, index + 1, iEnd);
    return node;
  };

  return build(0, len - 1, 0, len - 1);
};

// console.log(buildTree([], []));
// console.log(buildTree([1], [1]));
// console.log(buildTree([1, 2, 3],[2, 1, 3]));
// console.log(buildTree([1, 2, 3], [3, 2, 1]));
// console.log(buildTree([1, 2, 3, 4], [3, 2, 4, 1]));