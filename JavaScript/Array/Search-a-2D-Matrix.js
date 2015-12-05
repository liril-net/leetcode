//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length && matrix[0].length) {
    var row = 0;
    var col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
      if (target < matrix[row][col]) {
        col--;
      } else if (target > matrix[row][col]) {
        row++;
      } else {
        return true;
      }
    }
  }
  return false;
};

console.log(
    searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));
