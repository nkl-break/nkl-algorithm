from collections import deque
from functools import cmp_to_key

N = int(input())
times = []
idx = None
cnt = 1
def custom_sort(a: list, b: list) -> int :
  if a[2] > b[2] :
    return 1
  return -1

for _ in range(N) :
  a, b = map(int, input().split())
  c = abs(a - b)
  times.append([c, a, b])

# 시작할 인덱스 설정
for i in range(N) :
  if idx is None :
    idx = i
  elif times[i][2] < times[idx][2] :
    idx = i

times = sorted(times, key=cmp_to_key(custom_sort))

while idx < N :
  nidx = None
  if nidx >= N :
    break
  for i in range(nidx, N) :
    if

  cnt += 1
  idx = nidx
print(cnt)