// 일부 풀이 봄 (noSuchElementException이 떠서 찾아봄)

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine()); // n 정수 받기
        int[] arr = new int[n]; // n개의 길이 만큼 배열 선언

        st = new StringTokenizer(br.readLine()); // n개의 정수 받기
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken()); // 배열에 값 넣기
        }

        Arrays.sort(arr); // 오름차순으로 정렬

        int m = Integer.parseInt(br.readLine()); // m 정수 받기
        st = new StringTokenizer(br.readLine()); // m개의 정수 받기

        for (int i = 0; i < m; i++) {
            int num = Integer.parseInt(st.nextToken());

            int search = Arrays.binarySearch(arr, num); // 이진탐색 메서드 (없으면 음수를 반환 있으면 양수 반환)

            if(search < 0){
                System.out.println(0);
            }else{
                System.out.println(1);
            }
        }

    }
}


