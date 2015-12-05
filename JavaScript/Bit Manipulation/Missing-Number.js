//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var x = 0;
  for (var i in nums) x = x ^ i ^ nums[i];
  return (x ^ nums.length);
};


console.log(missingNumber([0, 1, 3]));
