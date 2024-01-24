function solution(numbers, target) {   
    let answer = 0;
    
    const dfs = (index, arraySum) => { 
        if (index === numbers.length) {
            if (target === arraySum) answer++;
            return ;
        }
        
        const plusResult = arraySum + numbers[index];
        const minusResult = arraySum - numbers[index];
        
        dfs(index + 1, plusResult);
        dfs(index + 1, minusResult);
        
    }
    
     dfs(0, 0)
    
    return answer;
     
}