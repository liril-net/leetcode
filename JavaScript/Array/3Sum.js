//
// Copyright (c) 2015 by liril.net. All Rights Reserved.
//

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort(function (x, y) { return (x - y); });
    var arr = Array();
    var last = Array();
    for (var i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (var j = i + 1; j < nums.length - 1; j++) {
            var k = j + 1;
            var sum = -nums[i] - nums[j];
            while (k < nums.length && nums[k] < sum) {
                k++;
            }
            if (k < nums.length && nums[k] == sum) {
                var triplet = [nums[i], nums[j], nums[k]];
                if (!last.length || last.join('') !== triplet.join('')) {
                    arr.push(triplet);
                    last = triplet;
                }
            }
        }
    }
    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
console.log(threeSum([0, -4, -5, 3, 1, 3, 4, 2, -5, 2, 4, 2, -5]));
