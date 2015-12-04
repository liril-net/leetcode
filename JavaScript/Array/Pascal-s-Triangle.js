//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var arr = Array();
  for (var i = 0; i < numRows; i++) {
    var row = Array();
    row[0] = 1;
    for (var j = 1; j < i; j++) {
      row[j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
    row[i] = 1;
    arr.push(row);
  }
  return arr;
};

console.log(generate(5));
