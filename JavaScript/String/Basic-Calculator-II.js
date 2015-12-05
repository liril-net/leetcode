//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var result = 0, tmp = 0;
  var op = '+', token = '';
  var stack = Array();
  for (var i = 0; i < s.length;) {
    while (s[i] == ' ') i++;
    var num = '';
    if (s[i] >= '0' && s[i] <= '9') {
      while (s[i] >= '0' && s[i] <= '9') num += s[i++];
      num = parseInt(num);
      switch (op) {
        case '+':
          tmp += num;
          break;
        case '-':
          tmp -= num;
          break;
        case '*':
          tmp *= num;
          break;
        case '/':
          tmp /= num;
          tmp = parseInt(tmp);
          break;
        default:
          break;
      }
    } else {
      if (s[i] == '+' || s[i] == '-') {
        result += tmp;
        tmp = 0;
      }
      op = s[i++];
    }
  }
  return result + tmp;
};

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3 +5 / 2 "));
