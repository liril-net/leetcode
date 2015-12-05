//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var ret = 0;
  for (; x !== 0; x = parseInt(x / 10)) ret = ret * 10 + x % 10;
  // 32位符号整数表示范围
  if (ret > 2147483647 || ret < -2147483648)
    return 0;
  else
    return ret;
};

console.log(reverse(123));
console.log(reverse(0));
console.log(reverse(111));
console.log(reverse(-123));
console.log(reverse(-123));
console.log(reverse(1534236469));
console.log(reverse(900000));
