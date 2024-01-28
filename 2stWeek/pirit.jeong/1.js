function solution(numbers) {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j=i+1;j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    
    answer.sort((prev, next) => prev - next)
    
    return [...new Set(answer)];
}
