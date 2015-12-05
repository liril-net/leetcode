//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  var tmp = x, y = 0;
  while (x !== 0) {
    y = y * 10 + x % 10;
    x = parseInt(x / 10);
  }
  if (tmp === y)
    return true;
  else
    return false;
};

console.log(isPalindrome(2147483647));
console.log(isPalindrome(121));
console.log(isPalindrome(0));
console.log(isPalindrome(-1));
console.log(isPalindrome(1111));
