import java.util.*;
class Solution {
    public int[] solution(int[] numbers) {
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                int sum = numbers[i] + numbers[j];
                set.add(sum);
            }
        }

        int[] answer = new int[set.size()];
        Iterator<Integer> iter = set.iterator();
        int index = 0;
        while (iter.hasNext()) {
            answer[index] = iter.next();
            index++;
        }
        Arrays.sort(answer);
        return answer;
    }
}