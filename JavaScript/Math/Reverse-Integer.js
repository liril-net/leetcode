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
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);

  // 反过来也应该是Integer
  if (ret > max || ret < min)
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
