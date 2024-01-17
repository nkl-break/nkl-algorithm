def solution(numbers):
    N = len(numbers)
    result = []
    for i in range(N) :
        for j in range(N) :
            if i == j :
                continue
            else :
                cur_result = numbers[i] + numbers[j]
                if cur_result not in result :
                    result.append(cur_result)
    result.sort()
    return result
