let input = require('fs').readFileSync('코테스터디/예제.txt').toString().trim().split('\n');
input.shift().split(' ')
let 회의리스트 = input.map((v) => v.split(' '))
let 현재시간 = 0
let 답 = 0
// 끝나는 시간 기준으로 가장 낮은순으로 정렬 끝나는 시간이 같다면 시작시간이 빠른걸로 정렬 후 끝나는 시간이 곧 현재시간이니까 현재시간보다 시작 시간이 높은 걸로만 갱신 
회의리스트.sort((a, b) => a[1] === b[1] ? +a[0] - +b[0] : +a[1] - +b[1]).forEach(([시작, 끝]) => {
  if (+현재시간 <= +시작) {
    현재시간 = 끝
    답++
  }
})
console.log(답)

