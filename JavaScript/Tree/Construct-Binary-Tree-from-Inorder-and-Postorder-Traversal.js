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

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }


/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  var map = {};
  var len = inorder.length;
  for (var i = 0; i < len; i++) {
    map[inorder[i]] = i;
  }

  var build = function(iStart, iEnd, pStart, pEnd) {
    // console.log('---------------------------------');
    // console.log(iStart);
    // console.log(iEnd);
    // console.log(pStart);
    // console.log(pEnd);
    if (iStart > iEnd || pStart > pEnd) {
      return null;
    }
    if (iStart === iEnd) {
      return new TreeNode(inorder[iStart]);
    }
    var root = postorder[pEnd];
    var node = new TreeNode(root);
    // console.log(node);
    var index = map[root];
    node.left = build(iStart, index - 1, pStart, index - 1 - iStart + pStart);
    node.right = build(index + 1, iEnd, index - iStart + pStart, pEnd - 1);
    return node;
  }
  return build(0, len - 1, 0, len - 1);
};



// console.log(buildTree([], []));
// console.log(buildTree([1], [1]));
// console.log(buildTree([2, 1, 3],[2, 3, 1]));
// console.log(buildTree([1, 3, 2], [3, 2, 1]));
// console.log(buildTree([1, 2, 3, 4], [3, 2, 4, 1]));