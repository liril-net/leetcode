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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    var queue = [[root]];
    while (true) {
      var q = [];
      var len = queue.length - 1;
      var thatQ = queue[len];
      for (var i in thatQ) {
        var node = queue[len].shift();
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
        queue[len].push(node.val);
      }
      if (q.length) {
        queue.push(q);
      } else {
        break;
      }
    }
    for (var index = 0, lengh = queue.length; index < lengh; index++) {
      if (index % 2 === 1) {
        queue[index] = queue[index].reverse();
      }
    }
    return queue;
};
