function solution(numbers) {
    const answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    const setAnswer = [... new Set(answer)];
    
    return setAnswer.sort((a, b) => a- b);
}

function solution2(numbers) {
   const answer = [];
     
   const dfs = (index, array) => { 
       if (index === numbers.length) return ;
       
       const newArray = [...array, numbers[index]];
       
       if (newArray.length === 2) {
           answer.push(newArray[0] + newArray[1]);
           return ;
       }
       
       for (let i = index + 1; i < numbers.length; i++) {
           dfs(i, newArray);
       }
   }

   for (let i = 0; i < numbers.length; i++) {
       dfs(i, []);
   }

   const answers = [...new Set (answer)];
    
   return answers.sort((a, b) => a - b);
}
