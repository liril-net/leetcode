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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    var queue = [[root]];
    while (true) {
      var q = [];
      var thatQ = queue[0];
      for (var i in thatQ) {
        var node = queue[0].shift();
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
        queue[0].push(node.val);
      }
      if (q.length) {
        queue.unshift(q);
      } else {
        break;
      }
    }
    return queue;
};