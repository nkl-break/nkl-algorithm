const maxProfit = (prices) => {
    let min = prices[0]; 
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) { 
        // 최솟값보다 싸다면
        if (prices[i] < min) {
            min = prices[i];
            continue; 
        }

        sum = prices[i] - min;
        //이득이 전보다 크다면 저장
        maxProfit = Math.max(maxProfit, sum); 
    }
    return maxProfit;
}
