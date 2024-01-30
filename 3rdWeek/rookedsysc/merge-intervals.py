from functools import cmp_to_key
class Solution:
  def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    def custom_sort(a:list, b:list) :
      if a[0] > b[0] :
        return 1
      return -1

    intervals = sorted(intervals, key=cmp_to_key(custom_sort))
    ans = []
    start = 0
    end = len(intervals)

    while start < end :
      next = start + 1
      min_value, max_value = intervals[start][0], intervals[start][1]

      while next < end and intervals[next][0] <= max_value :
        max_value = max(intervals[next][1], max_value)
        next += 1
      ans.append([min_value, max_value])
      start = next

    return ans