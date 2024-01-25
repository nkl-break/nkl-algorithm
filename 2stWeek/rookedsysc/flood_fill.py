from collections import deque

class Solution:
  def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
    d = [[1,0],[-1,0],[0,1],[0,-1]] 
    visited = [[False for _ in range(len(image[0]))] for _ in range(len(image))]
    value = image[sr][sc]
    q = deque()
    q.append([sr,sc])
    min = -1
    max_r = len(image)
    max_c = len(image[0])

    while q :
      sr, sc = q.popleft()
      image[sr][sc] = color
      visited[sr][sc] = True
      for _d in d :
        nsr, nsc = sr + _d[0], sc + _d[1]
        if min < nsr < max_r and min < nsc < max_c :
          if image[nsr][nsc] == value and not visited[nsr][nsc] :
            q.append([nsr, nsc])

    return image
   