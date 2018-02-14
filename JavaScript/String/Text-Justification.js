//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  if (!maxWidth) return [''];
  const makeSpace = n =>
    Array(n)
      .fill(' ')
      .join('');

  if (!words || !words.length) return [makeSpace(maxWidth)];

  const fillRow = (indexRow, stringRow) => {
    const length = indexRow.length;
    const s = stringRow.join(' ');
    const space = maxWidth - s.length + length - 1;
    let rest = 0;
    let gutter = '';
    if (length === 1) {
      ans.push(stringRow[0] + makeSpace(space));
    } else {
      rest = space % (length - 1);
      gutter = makeSpace((space - rest) / (length - 1));

      let str = '';
      for (let j = 0; j < length; j++) {
        str += stringRow[j];
        if (j !== length - 1) {
          str += gutter;
        }
        if (j < rest) {
          str += ' ';
        }
      }
      ans.push(str);
    }
  };

  const ans = [];
  let i = 0;
  let indexRow = [];
  let stringRow = [];
  let missing = false;
  while (i < words.length) {
    const current = words[i];
    const shouldCheck = stringRow.concat(current).join(' ');
    const checkLength = shouldCheck.length;

    if (checkLength < maxWidth) {
      indexRow.push(i++);
      stringRow.push(current);
    } else if (checkLength === maxWidth) {
      ans.push(shouldCheck);
      i++;
      indexRow = [];
      stringRow = [];
    } else {
      fillRow(indexRow, stringRow);
      indexRow = [];
      stringRow = [];
    }
  }

  if (stringRow.length) {
    const str = stringRow.join(' ');
    ans.push(str + makeSpace(maxWidth - str.length));
  }

  return ans;
};

console.log(
  fullJustify(['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'], 6)
);
console.log(
  fullJustify(
    [
      "Don't",
      'go',
      'around',
      'saying',
      'the',
      'world',
      'owes',
      'you',
      'a',
      'living;',
      'the',
      'world',
      'owes',
      'you',
      'nothing;',
      'it',
      'was',
      'here',
      'first.'
    ],
    30
  )
);
console.log(fullJustify(['What', 'must', 'be', 'shall', 'be.'], 12));
console.log(fullJustify(['a', 'b', 'c', 'd', 'e'], 3));
console.log(fullJustify(['a'], 1));
console.log(fullJustify(['a', 'b', 'c', 'd', 'e'], 1));
console.log(fullJustify([''], 0));
console.log(fullJustify([], 2));
console.log(
  fullJustify(
    ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    16
  )
);

console.log(
  fullJustify(
    ['This', 'is', 'an', 'example', 'of', 'justification.', 'text'],
    16
  )
);
