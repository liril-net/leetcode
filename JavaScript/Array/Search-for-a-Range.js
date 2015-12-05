//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
  var low, mid, high, tmp;

  for (low = 0, high = nums.length - 1; low <= high;) {
    mid = parseInt((low + high) / 2);
    if (nums[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }

  if (low < nums.length && nums[low] === target)
    tmp = low;
  else
    return ([-1, -1]);

  for (high = nums.length - 1; low <= high;) {
    mid = parseInt((low + high) / 2);
    if (nums[mid] <= target)
      low = mid + 1;
    else
      high = mid - 1;
  }

  if (nums[high] === target)
    return ([tmp, high]);
  else
    return ([-1, -1]);
};

console.log(searchRange([], 0));
console.log(searchRange([0, 8, 8, 8, 9], 8));
console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
