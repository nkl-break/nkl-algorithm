function 타겟넘버(numbers, target) {
  let 답 = 0
  const dfs = (idx, 합) => {
    if (idx == numbers.length) {
      if (합 == target) 답++
      return;
    }
    dfs(idx + 1, 합 + numbers[idx])
    dfs(idx + 1, 합 - numbers[idx])
  }
  dfs(0, 0)
  return 답;
}