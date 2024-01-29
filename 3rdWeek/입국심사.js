function solution(n, times) {
    times.sort(); 
    
    let start = 0;
    let end = Math.max(...times) * n;
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
    
        let count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
          
        if (count < n) {
            start = mid + 1;
        } else {
           end = mid - 1;
        }
    }
    
    return start;
}