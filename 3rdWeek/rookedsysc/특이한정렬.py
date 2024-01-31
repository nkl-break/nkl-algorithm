from functools import cmp_to_key

def solution(numlist, n):
    def custom_sort(a,b) :
        # b가 a보다 가까운 경우 정렬 필요함
        if abs(n - a) > abs(n - b) :
            return 1
        # b와 a의 거리가 같은데 b가 a 보다 더 큰 경우 정렬 필요함
        elif (abs(n - a) == abs(n - b)) and a < b :
            return 1
        return -1
    answer = sorted(numlist, key=cmp_to_key(custom_sort))
    return answer