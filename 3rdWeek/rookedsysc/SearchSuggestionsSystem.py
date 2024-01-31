class Solution:
  def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
    products.sort()
    ans = []
    for i in range(len(searchWord)) :
      tmp = []
      cnt = 0
      word = searchWord[0:i+1]
      word_len = len(word)
      for p in products :
        if word == p[0:word_len] :
          tmp.append(p)
          cnt += 1
          if cnt > 2 :
            break
      ans.append(tmp)
    return ans
