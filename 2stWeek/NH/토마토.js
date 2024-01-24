let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
let tomatoVillage = input.map((item) => item.split(' ').map(Number));
 
let isZeroFlag = 1;

//0이 아예 없는지 판단
tomatoVillage.forEach((item) => {
    item.forEach((items) => {
        if (items === 0) {
            isZeroFlag = 0;
            return;
        }
    })
})

if (isZeroFlag) {
    console.log(0);
    return ;
}

//이미 익은 토마토에서 시작
const doneTomato = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomatoVillage[i][j] === 1) doneTomato.push([i, j, 0]);
    }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (start) => {
    const queue = [...start]; 
    let idx = 0;

    while (queue.length !== idx) {
        const [x, y, day] = queue[idx];
  
        for (let i = 0 ; i < 4; i++) {
            const newX = dx[i] + x;
            const newY = dy[i] + y;
            const newDay = day + 1;

            if (newX < 0 || newX >= N || newY < 0 || newY >= M) continue;
            
            if (tomatoVillage[newX][newY] === 0) { 
                tomatoVillage[newX][newY] = newDay; 
                queue.push([newX, newY, newDay]);
            } 
        }
        idx++;
    }
}

bfs(doneTomato)

let max = 0;
let flag = 1;

//정복이 불가능한 토마토 확인
tomatoVillage.forEach((item) => {
    item.forEach((items) => {
        if (items === 0) {
            flag = 0;
            return ;
        }
        max = Math.max(items, max);
    })
})

flag ? console.log(max) : console.log(-1);