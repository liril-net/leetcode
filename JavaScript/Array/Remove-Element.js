/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] == val) continue;
    nums[j] = nums[i];
    j++;
  }
  return j;
};

console.log(removeElement([3, 3], 3));
