/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (var i = m + n - 1; i >= 0, n > 0; i--) {
    if (m && n) {
      if (nums1[m - 1] > nums2[n - 1]) {
        nums1[i] = nums1[--m];
      } else {
        nums1[i] = nums2[--n];
      }
    } else if (m) {
      nums1[i] = nums1[--m];
    } else if (n) {
      nums1[i] = nums2[--n];
    }
  }
};

console.log(merge([ 1 ], 1, [], 0));
