function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  function dfs(index, value) {
    if (index < numbers.length) {
      dfs(index + 1, value + numbers[index]);
      dfs(index + 1, value - numbers[index]);
    } else if (value === target) {
      answer += 1;
    }
  }

  return answer;
}
