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
    var path = [root];
    while (path.length) {
      console.log(path.length);
      for (var i = 0, len = path.length; i < len; i++) {
        var node = path.shift();
        if (i < len - 1) {
          node.next = path[0];
        } else {
          node.next = null;
        }
        if (node.left) {
          path.push(node.left);
        }
        if (node.right) {
          path.push(node.right);
        }
      }
    }
  }
};