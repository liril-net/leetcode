//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;
  const firstMatch = !!s.length && (s[0] === p[0] || p[0] === '.');

  if (p.length > 1 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
  } else {
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
};

console.log(isMatch('a', '.*..') === false);
console.log(isMatch('ab', '.*c') === false);
console.log(isMatch('aa', 'a') === false);
console.log(isMatch('aa', 'aa') === true);
console.log(isMatch('aaa', 'aa') === false);
console.log(isMatch('aa', 'a*') === true);
console.log(isMatch('aa', '.*') === true);
console.log(isMatch('ab', '.*') === true);
console.log(isMatch('aab', 'c*a*b') === true);
