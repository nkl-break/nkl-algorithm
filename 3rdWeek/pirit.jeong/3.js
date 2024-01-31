function mergeArray(answer, first, second) {
  if (first[1] >= second[0]) {
    answer.pop();
    answer.push([Math.min(first[0], second[0]), Math.max(first[1], second[1])]);
  } else {
    answer.push(second);
  }
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const answer = [];
  if (intervals.length === 0) {
    return answer;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  answer.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    mergeArray(answer, answer[answer.length - 1], intervals[i]);
  }
  return answer;
};
