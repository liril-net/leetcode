//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count;
  for (count = 0; n > 0; n >>>= 1) count += (n & 1);
  return count;
};

console.log(hammingWeight(11));
console.log(hammingWeight(2147483648));
