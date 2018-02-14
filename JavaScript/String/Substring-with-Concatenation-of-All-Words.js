//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!words.length || !s.length) return []
  const step = words[0].length
  const length = s.length
  const dp = []
  const result = []
  const l = words.length * step
  for (let i = step; i <= length; i++) {
    const slice = s.slice(i - step, i)
    if (words.indexOf(slice) !== -1) {
      let {
        used,
        unused
      } = dp[i - step] || {
        used: [],
        unused: [].concat(words)
      }

      if (unused.indexOf(slice) === -1) {
        const min = used.indexOf(slice) + 1
        unused = unused.concat(used.slice(0, min))
        used = used.slice(min)
      }

      used.push(slice)
      const index = unused.indexOf(slice)
      unused.splice(index, 1)

      dp[i] = {
        used,
        unused
      }
      if (unused.length === 0) {
        result.push(i - l)
      }
    }
  }

  return result
}

console.log(findSubstring('', ['foo', 'bar']))
console.log(findSubstring('foo', []))
console.log(findSubstring('foofoobar', ['foo', 'bar']))
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']))
console.log(findSubstring('ffoobarfooo', ['foo', 'bar']))
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]))
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
console.log(findSubstring("aaaaaaaa", ["aa", "aa", "aa"]))
