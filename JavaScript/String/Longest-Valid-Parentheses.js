//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let tempMax = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return max;
};

// console.log(longestValidParentheses(''))
// console.log(longestValidParentheses('('))
// console.log(longestValidParentheses(')'))
// console.log(longestValidParentheses('()'))
// console.log(longestValidParentheses('())'))
// console.log(longestValidParentheses('(()()))'))
// console.log(longestValidParentheses('()(())'))
// console.log(longestValidParentheses('()(()'))
console.log(longestValidParentheses('(()'));
