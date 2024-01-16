//리팩토링 한 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift()); 

const [a, b] = input.map((item) => item.split(' ').map(Number));

const sortedA = a.sort((a, b) => a - b); 

let sum = 0;

for (let num of sortedA) {
    const maxValue = Math.max(...b);
    const maxIndex = b.indexOf(maxValue);

    sum += maxValue * num;
    b.splice(maxIndex, 1);
}

console.log(sum);

//처음 푼 풀이
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const N = Number(input.shift()); 

// const [a, b] = input.map((item) => item.split(' ').map(Number).sort((a,b) => a - b));

// let sum = 0;

// for (let i = 0; i < N; i++) {
//     sum += a[i] * b[N - i - 1] ;   
// } 

// console.log(sum);