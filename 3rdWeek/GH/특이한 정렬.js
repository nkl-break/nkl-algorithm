function solution(numlist, n) {
  return numlist.map(v => [v, Math.abs(v - n)]).sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]).map(v => v[0]);
}
// abs = 절대값 반환 
// map 으로 2중배열로 index 0 자리에는 v 의 기존값 1 에는 abs 로 기존값 - n 즉 얼마나 차이나냐의 값을 절대값으로 저장 
// sort 로 0에 가까운 순으로 정렬 하고 값이 같을때는 기존값이 더 큰 애가 앞으로 