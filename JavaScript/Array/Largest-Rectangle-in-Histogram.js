/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    height.push(0);
    var arr = Array();
    var area = 0;
    for (var i = 0; i < height.length; i++) {
        if (arr.length == 0 || height[i] < arr.pop()) {

        }
    }
    return area;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));