## Candy 

⚠️ 풀이 실패 !! 

내가 풀던 풀이 👇

내가 생각하는 틀린 이유 : 멍청해서 

```python
class Solution:
  def candy(self, ratings: list[int]) -> int:
    costs = [1 for _ in range(len(ratings))]
    for i in range(len(ratings)):
      cur = i
      if i != len(ratings) - 1:
        for j in range(i + 1, len(ratings)):
          # 이전 아이가 점수가 더 높은 경우 멈춤
          if ratings[cur] > ratings[j]:
            cur = j
            row = cur - 1
            while ratings[row] > ratings[cur] and row > -1 :
              if costs[row] > costs[cur]  :
                break
              costs[row] = costs[cur] + 1
              row -= 1
              cur -= 1
            break
          # 같은 점수에 온 경우 멈춤
          if ratings[cur] == ratings[j]:
            break
          if ratings[cur] < ratings[j]:
            costs[j] = costs[cur] + 1
          cur += 1

    return sum(costs)
```

## Best Time to Buy and Sell Stock

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
      min_value = prices[0]
      benefits = [] 
      for p in prices :
        min_value = min(min_value, p)
        benefits.append(p - min_value)

      return max(benefits)
```

