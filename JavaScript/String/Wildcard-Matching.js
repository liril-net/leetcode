//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sl = s.length;
  const pl = p.length;
  let i = 0;
  let j = 0;
  let match = 0;
  let star = -1;
  while (i < sl) {
    if ((j < pl && p[j] === '?') || p[j] === s[i]) {
      i++;
      j++;
    } else if (j < pl && p[j] === '*') {
      star = j;
      j++;
      match = i;
    } else if (star !== -1) {
      j = star + 1;
      match++;
      i = match;
    } else {
      return false;
    }
  }

  while (j < pl && p[j] === '*') j++;

  return j === pl;
};

console.log(isMatch('aa', 'a') === false);
console.log(isMatch('aa', 'aa') === true);
console.log(isMatch('aaa', 'aa') === false);
console.log(isMatch('aa', '*') === true);
console.log(isMatch('aa', 'a*') === true);
console.log(isMatch('ab', '?*') === true);
console.log(isMatch('aab', 'c*a*b') === false);
console.log(isMatch('', '') === true);
console.log(isMatch('', '*') === true);
console.log(isMatch('a', '') === false);
console.log(isMatch('', '?') === false);
console.log(isMatch('zacabz', '*a?b*') === false);
console.log(isMatch('abefcdgiescdfimde', 'ab*cd?i*de') === true);
console.log(isMatch('c', '*?*') === true);
