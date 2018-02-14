//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height || !height.length) return 0;

  let left = 0;
  let right = 0;
  const length = height.length;
  let sum = 0;
  while (left < length && right < length) {
    if (left === right) right++;
    const leftHeight = height[left];
    const rightHeight = height[right];
    console.log(left, leftHeight, right, rightHeight, sum);
    if (leftHeight > rightHeight) {
      sum += leftHeight - rightHeight;
      right++;
    } else {
      left = right;
      right++;
    }
  }

  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
