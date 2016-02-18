//
// Copyright (c) 2016 by liril.net. All Rights Reserved.
//

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root) {
    root.next = null;
    var path = [root];
    while (path.length) {
      var node = path.shift();
      if (node.left) {
        node.left.next = node.right;
        path.push(node.left);
      }
      if (node.right) {
        path.push(node.right);
        if (node.next) {
          node.right.next = node.next.left;
        } else {
          node.right.next = null;
        }
      }
    }
  }
};