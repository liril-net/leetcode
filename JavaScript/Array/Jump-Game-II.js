//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums) return 0;
  const l = nums.length;
  if (l < 2) return 0;

  let level = 0;
  let currentMax = 0;
  let nextMax = 0;
  let i = 0;

  while (currentMax - i + 1 > 0) {
    level++;

    for (; i <= currentMax; i++) {
      nextMax = Math.max(nextMax, i + nums[i]);
      if (nextMax >= l - 1) return level;
    }
    currentMax = nextMax;
  }

  return 0;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([1, 0, 1]));
