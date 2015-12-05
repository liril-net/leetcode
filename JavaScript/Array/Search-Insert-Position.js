//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var low, mid, high;
  for (low = 0, high = nums.length - 1; low <= high;) {
    mid = parseInt((low + high) / 2);
    if (nums[mid] === target)
      return mid;
    else if (nums[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return low;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
