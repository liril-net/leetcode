//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s || !t || !s.length || !t.length) return '';
  const map = {};
  // mask a hash-table
  for (const char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let counter = t.length;
  let start = 0;
  let ans = '';
  let distance = Number.POSITIVE_INFINITY;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // counter discrease when meet a new unused char
    if (map[char] !== undefined && map[char]-- > 0) {
      counter--;
    }

    while (counter === 0) {
      const newDistance = i - start;
      if (newDistance < distance) {
        distance = newDistance;
        ans = s.slice(start, i + 1);
      }

      const startChar = s[start++];
      // ounter increase when meet remove all extra char
      if (map[startChar]++ === 0) counter++;
    }
  }

  return ans;
};

console.log(minWindow('', 'A') === '');
console.log(minWindow('ADOBECODEBANC', '') === '');
console.log(minWindow('ADOBECODEBANC', 'ABC') === 'BANC');
console.log(minWindow('A', 'A') === 'A');
console.log(minWindow('A', 'AB') === '');
console.log(minWindow('A', 'AA') === '');
console.log(minWindow('AA', 'A') === 'A');
