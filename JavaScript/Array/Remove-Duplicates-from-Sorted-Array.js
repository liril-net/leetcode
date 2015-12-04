/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (var i = 1, j = 0; i < nums.length; i++) {
    if (nums[i] != nums[j])
      nums[++j] = nums[i];
  }
  return nums.length ? ++j : 0;
};

console.log(removeDuplicates([ 1, 2 ]));
