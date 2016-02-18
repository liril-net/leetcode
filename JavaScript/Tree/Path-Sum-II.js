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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  var result = [];
  var visit = [0];
  var path = [root];
  while (path.length) {
    var node = path.pop();
    if (!node.left && !node.right) {
      var total = 0;
      var p = [];
      for (var i in path) {
        total += path[i].val;
        p.push(path[i].val);
      }
      total += node.val;
      p.push(node.val);
      if (total === sum) {
        result.push(p);
      }
    } else if (visit[path.length] === 2) {
    } else if (node.left && visit[path.length] !== 1) {
      visit[path.length] = 1;
      path.push(node);
      visit[path.length] = 0;
      path.push(node.left);
    } else if (node.right && visit[path.length] !== 2) {
      visit[path.length] = 2;
      path.push(node);
      visit[path.length] = 0;
      path.push(node.right);
    } else {
      visit[path.length] = 0;
    }
  }
  return result;
};
