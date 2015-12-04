//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var arr = Array();
  for (var i = 0; i <= rowIndex; i++) {
    arr[0] = 1;
    for (var j = i - 1; j > 0; j--) {
      arr[j] = arr[j] + arr[j - 1];
    }
    arr[i] = 1;
  }
  return arr;
};

console.log(getRow(4));
