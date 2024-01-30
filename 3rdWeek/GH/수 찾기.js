// let input = require('fs').readFileSync('코테스터디/예제.txt').toString().trim().split('\n');
const [N, A, M, B] = input.map(v => v.split(" "));
const list = new Set(A)
const 답 = B.map(v => list.has(v) ? 1 : 0);
console.log(답.join("\n"))
