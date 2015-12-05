//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  var low, mid, high;
  for (low = 0, high = nums.length - 1; low <= high;) {
    nums[-1] = Number.NEGATIVE_INFINITY;
    nums[nums.length] = Number.POSITIVE_INFINITY;
    mid = parseInt((low + high) / 2);
    if (nums[mid] > nums[mid - 1]) {
      if (nums[mid] > nums[mid + 1])
        return mid;
      else
        low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return mid;
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([3, 2, 1]));
console.log(findPeakElement([1, 2, 3]));
console.log(findPeakElement([1, 2]));
