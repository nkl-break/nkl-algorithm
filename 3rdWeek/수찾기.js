let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, A, M, S] = input;

const originalArray = A.split(' ').map(Number).sort((a, b) => a - b);

const targetArray = S.split(' ').map(Number);

const answer = [];

for (let num of targetArray) {
    let start = 0;
    let end = originalArray.length - 1;
    let flag = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);  
        if (num < originalArray[mid]) {
            end = mid - 1;
        }
        else if (num > originalArray[mid]) {
            start = mid + 1;
        } else {
            flag = 1;
            break;
        }
    }

    if (flag) answer.push(1);
    else answer.push(0);
}

console.log(answer.join('\n'));

 