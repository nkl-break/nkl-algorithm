class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<List<Integer>> intervalsList = new ArrayList<>();
        
        for (int i = 0; i < intervals.length; i++) {
            int start = intervals[i][0];
            int end = intervals[i][1];

            while(i < intervals.length - 1 && end >= intervals[i + 1][0]){
                end = Math.max(end, intervals[i + 1][1]);
                i++;
            }
            intervalsList.add(Arrays.asList(start, end));
        }

        return intervalsList.stream()
                .map(x -> x.stream().mapToInt(i -> i).toArray()).toArray(int[][]::new);
    }
}