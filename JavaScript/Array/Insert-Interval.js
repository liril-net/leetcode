//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals || !intervals.length) return [newInterval];
  if (!newInterval) return intervals;
  const ans = [];
  let i = 0;
  while (i < intervals.length && intervals[i].end < newInterval.start)
    ans.push(intervals[i++]);

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(intervals[i].start, newInterval.start),
      Math.max(intervals[i].end, newInterval.end)
    );
    i++;
  }

  ans.push(newInterval);
  while (i < intervals.length) ans.push(intervals[i++]);

  return ans;
};

console.log(insert([new Interval(1, 5)], new Interval(5, 7)));
console.log(insert([new Interval(1, 5)], new Interval(0, 1)));
console.log(
  insert([new Interval(1, 3), new Interval(6, 9)], new Interval(2, 5))
);
console.log(
  insert([new Interval(1, 4), new Interval(6, 9)], new Interval(1, 3))
);
console.log(
  insert([new Interval(1, 4), new Interval(6, 9)], new Interval(7, 8))
);
console.log(
  insert([new Interval(1, 4), new Interval(6, 9)], new Interval(2, 7))
);
console.log(
  insert(
    [
      new Interval(1, 2),
      new Interval(3, 5),
      new Interval(6, 7),
      new Interval(8, 10),
      new Interval(12, 16)
    ],
    new Interval(4, 9)
  )
);
