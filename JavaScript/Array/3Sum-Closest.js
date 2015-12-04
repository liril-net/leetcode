//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(x, y) { return (x - y); });
  var minDistance, closestSum;
  for (var i = 0; i < nums.length - 2; i++) {
    if (i === 0) {
      closestSum = nums[0] + nums[1] + nums[2];
      minDistance = Math.abs(closestSum - target);
    }
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < minDistance) {
          closestSum = sum;
          minDistance = Math.abs(closestSum - target);
        }
      }
    }
  }
  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
