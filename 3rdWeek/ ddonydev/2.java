import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine()); // 회의의 수

        int[][] time = new int[num][2];
        for (int i = 0; i < time.length; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine()); // 한 줄씩 입력받기
            time[i][0] = Integer.parseInt(st.nextToken()); // 시작시간
            time[i][1] = Integer.parseInt(st.nextToken()); // 종료시간
        }

        // 종료시간이 같을 경우 시작시간이 빠른 순서대로
        Arrays.sort(time, Comparator.comparing((int[] o) -> o[1]).thenComparing((int[] o) -> o[0]));

        int cnt = 0;
        int end = 0;
        for (int i = 0; i < time.length; i++) {
            if(end <= time[i][0]){ // 종료시간이 시작시간보다 작거나 같으면
                end = time[i][1]; // 종료시간 갱신
                cnt++;
            }
        }

        System.out.println(cnt);

    }
}
