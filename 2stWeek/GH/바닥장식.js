// 문제 2 바닥 장식
const 문제2 = () => {
  let [N] = input.shift().split(' ')
  let 나무판자들 = input
  let 가로나무 = 0
  let 세로나무 = 0
  for (let i = 0; i < +N; i++) {
    세로나무 += 나무판자들[i].split('').filter(v => v === '|').length
    console.log('나무판자들[i]', 나무판자들[i])
    나무판자들[i].split('').forEach((나무, idx) => {
      if (나무 !== '|' && 나무 !== 나무판자들[i].charAt(idx + 1)) {
        가로나무++
      }
    })
    if (!!나무판자들[i + 1]) {
      나무판자들[i].split('').forEach((나무, 나무위치) => {
        if (나무 === '|' && 나무 === 나무판자들[i + 1].split('')[나무위치]) {
          세로나무--
        }
      })
    }
  }
  console.log(가로나무 + 세로나무)
}