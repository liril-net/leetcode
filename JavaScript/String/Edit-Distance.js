//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (!word1 || !word1.length) return word2.length;
  if (!word2 || !word2.length) return word1.length;

  const dp = [];
  const l1 = word1.length;
  const l2 = word2.length;

  // momo word1[0...i] -> word2[0]
  for (let i = 0; i <= l1; i++) {
    dp[i] = i;
  }

  // calc word1[0...i] -> word2[j]
  for (let j = 1; j <= l2; j++) {
    let pre = dp[0]; // word1[0] -> word2[0...j - 1]
    dp[0] = j; // word1[0] -> word2[0...j]

    for (let i = 1; i <= l1; i++) {
      const temp = dp[i]; // word1[0...i] -> word2[0...j - 1]
      if (word1[i - 1] === word2[j - 1]) {
        // word1[0...i] -> word2[0...j] = word1[0...i -1] -> word2[0...j - 1]
        dp[i] = pre;
      } else {
        // word1[0...i - 1] -> word2[0...j - 1]
        // word1[0...i - 1] -> wrod2[0...j]
        // word1[0...i] -> wrod2[0...j - 1]
        dp[i] = Math.min(pre, dp[i - 1], dp[i]) + 1;
      }
      pre = temp; // word1[0...i] -> word2[0...j - 1]
    }
  }

  return dp[l1];
};

console.log(minDistance('a', 'ab') === 1);
console.log(minDistance('a', 'a') === 0);
console.log(minDistance('a', 'b') === 1);
console.log(minDistance('a', '') === 1);
console.log(minDistance('', 'b') === 1);