/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
  var area = 0;
  var arr = Array();
  height.push(0);
  var i = 0;
  while (i < height.length) {
    if (!arr.length || height[arr[arr.length - 1]] < height[i]) {
      arr.push(i++);
    } else {
      var bar = arr.pop();
      area = Math.max(
          area, height[bar] * (arr.length ? i - arr[arr.length - 1] - 1 : i));
    }
  }
  return area;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 1, 2]));
console.log(largestRectangleArea([1, 2, 2]));
console.log(largestRectangleArea([4, 2, 0, 3, 2, 5]));
console.log(largestRectangleArea([3, 2, 5]));
console.log(largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 0]));
