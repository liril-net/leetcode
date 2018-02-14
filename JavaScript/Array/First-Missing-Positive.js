//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums || !nums.length) return 1;
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] - 1 >= 0 &&
      nums[i] - 1 < nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length + 1;
};

// console.log(firstMissingPositive([1, 2, 3]));
console.log(firstMissingPositive([3, 4, -1, 1]));
