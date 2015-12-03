/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums = nums.sort((x, y) => x - y);
    var arr = Array();
    for (var i = 0; i < nums.length; i++) {
        arr[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        var index = arr[target - nums[i]];
        if (i < index) {
            return [i + 1, index + 1];
        }
    }
}

console.log(twoSum([3, 2, 4], 6))