// 문제1
function 두개뽑아서더하기(numbers) {
  let 답 = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      답.push(numbers[i] + numbers[j])
    }
  }
  return [...new Set(답)].sort((a, b) => a - b)
}
console.log(
  두개뽑아서더하기([2, 1, 3, 4, 1]),
  두개뽑아서더하기([5, 0, 2, 7])
)
