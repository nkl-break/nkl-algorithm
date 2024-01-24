const candy = (ratings) => { 
    let candyArray = new Array(ratings.length).fill(1); 
    
    //왼쪽에서 오른쪽으로 한번
    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i] < ratings[i + 1] && candyArray[i] >= candyArray[i + 1]) { 
            candyArray[i + 1] = candyArray[i] + 1;
        }
        else if (ratings[i] > ratings[i + 1] && candyArray[i] <= candyArray[i + 1]) { 
            candyArray[i] = candyArray[i + 1] + 1;
        }
    }  

    //오른쪽에서 왼쪽으로 한번
    for (let i = ratings.length - 1; i > 0; i--) {
        if (ratings[i] < ratings[i - 1] && candyArray[i] >= candyArray[i - 1]) { 
            candyArray[i - 1] = candyArray[i] + 1;
        }
        else if (ratings[i] > ratings[i - 1] && candyArray[i] <= candyArray[i - 1]) { 
            candyArray[i] = candyArray[i - 1] + 1;
        }
    }    
    const sum = candyArray.reduce((acc,cur) => acc + cur);
    return sum;
}