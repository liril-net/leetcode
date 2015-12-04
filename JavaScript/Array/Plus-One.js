/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1, carry = 1; i >= 0; i--) {
    digits[i] += carry;
    carry = parseInt(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) {
    digits.splice(0, 0, 1);
  }
  return digits;
};

console.log(plusOne([9]));
