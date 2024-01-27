/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else {
            if (a[1] > b[1]) return 1;
            else return -1;
        }
    });
   
    if (intervals.length === 1) return [[intervals[0][0], intervals[0][1]]];

    for (let i = 1; i < intervals.length; i++) {  
        if (intervals[i - 1][1] >= intervals[i][0]) {
            intervals[i][0] = intervals[i - 1][0];
            intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1]); 
            intervals.splice(i - 1 ,1);
            i--;
        }  
    }
 
    return intervals;
}