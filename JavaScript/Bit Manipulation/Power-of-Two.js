//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  var hasOne = false;
  for (; n > 0; n >>>= 1) {
    if (n & 1) {
      if (hasOne)
        return false;
      else
        hasOne = !hasOne;
    }
  }
  return true;
};

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
