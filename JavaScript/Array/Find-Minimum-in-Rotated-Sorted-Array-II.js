/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var start = 0, end = nums.length - 1;
  while (start < end - 1) {
    if (nums[end] > nums[start])
      return nums[start];
    var mid = parseInt((start + end) / 2);
    if (nums[mid] == nums[start]) {
      start++;
    } else if (nums[mid] > nums[start]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return Math.min(nums[start], nums[end]);
};

// console.log(findMin([2, 2, 2, 1]));
console.log(findMin([ 10, 1, 10, 10, 10 ]));
