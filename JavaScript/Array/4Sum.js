/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((x, y) => x - y);
  var hash = Array();
  var keys = Array();
  var arr = Array();
  var indexHash = Array();
  var numHash = Array();
  var i, j, k;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      var num = nums[i] + nums[j];
      if (!hash[num]) {
        hash[num] = Array();
        keys.push(num);
      }
      hash[num].push([ i, j ]);
    }
  }
  for (i = 0; i < keys.length; i++) {
    if (keys[i] > target - keys[i])
      continue;
    var pair1 = hash[keys[i]];
    var pair2 = hash[target - keys[i]];
    if (!pair2)
      continue;
    for (j = 0; j < pair1.length; j++) {
      for (k = 0; k < pair2.length; k++) {
        var indexPair = pair1[j].concat(pair2[k]);
        if (indexHash[indexPair.join('')])
          continue;
        indexHash[indexPair.join('')] = true;
        indexPair.sort((x, y) => x - y);
        if (indexPair[0] == indexPair[1] || indexPair[1] == indexPair[2] ||
            indexPair[2] == indexPair[3])
          continue;

        var numPair = Array();
        indexPair.map(index => numPair.push(nums[index]));
        if (numHash[numPair.join('')])
          continue;
        numHash[numPair.join('')] = true;
        arr.push(numPair);
      }
    }
  }
  return arr;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([-482,-468,-465,-460,-451,-428,-426,-415,-411,-405,-396,-394,-372,-370,-368,-361,-358,-353,-352,-334,-318,-300,-287,-273,-251,-241,-239,-218,-215,-212,-187,-185,-170,-145,-123,-112,-73,-63,-58,-36,-19,34,42,47,85,113,126,128,134,180,181,199,206,221,229,242,243,255,262,270,305,372,393,405,420,427,428,433,446,458,469,471,486],
// -3524));
console.log(fourSum([ 0, 0, 0, 0 ], 0));
console.log(fourSum([ 0, 0, 0, 0 ], 1));
