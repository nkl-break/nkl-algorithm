
// 틀림 
// 풀이 참고 - https://velog.io/@ro_sie/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JAVA-%ED%8A%B9%EC%9D%B4%ED%95%9C-%EC%A0%95%EB%A0%AC
import java.util.*;

class Solution {
    public int[] solution(int[] numlist, int n) {
        int count = numlist.length;
        int i = 0;

        while (i == count) {
            // n과 각 배열 숫자들의 차이? 구현하는 법을 모르겠어서 해답봄
        }

        return answer;
    }
}

/*
 * 참고한 풀이
 * import java.util.*;
 * 
 * class Solution {
 * public int[] solution(int[] numlist, int n) {
 * int[] answer = new int[numlist.length];
 * double[] order = new double[numlist.length];
 * 
 * for(int i = 0; i < numlist.length; i++) {
 * if(numlist[i] - n < 0)
 * // n을 뺏을 때 음수 값인 경우, +0.5를 해서 같은 거리에 있는 양수 값보다 정렬을 했을 시 뒤로 밀리도록 함
 * order[i] = ((int)Math.abs(numlist[i] - n)) + 0.5;
 * else
 * order[i] = numlist[i] - n;
 * }
 * 
 * Arrays.sort(order); // 오름차순 정렬
 * 
 * for(int i = 0; i < numlist.length; i++) {
 * if(order[i] % 1 != 0) answer[i] = n - (int)order[i];
 * else answer[i] = (int)order[i] + n;
 * }
 * 
 * return answer;
 * }
 * }
 */
