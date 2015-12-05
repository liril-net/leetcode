//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var delta = a.length - b.length;
  for (; delta > 0; delta--) b = '0' + b;
  for (; delta < 0; delta++) a = '0' + a;
  a = a.split('');
  b = b.split('');

  var sum = Array(), carry = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    sum[i] = a[i] ^ b[i] ^ carry;
    carry = (a[i] & b[i]) | ((a[i] ^ b[i]) & carry);
  }
  if (carry) sum = [carry].concat(sum);
  return sum.join('');
};

console.log(addBinary("1111", "11000"));
console.log(addBinary("", "0"));
console.log(addBinary("0", "0"));
