import java.io.*;
import java.util.*;

public class Main {
    static int[][] graph = new int[1001][1001];
    static boolean[] visited = new boolean[1001];
    static int n, m , v;
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        v = Integer.parseInt(st.nextToken());

        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            graph[x][y] = 1;
            graph[y][x] = 1;
        }

        dfs(v);
        System.out.println();
        bfs(v);
        

    }

    static void dfs(int x) {
        visited[x] = true; // 방문 표시
        System.out.print(x + " ");

        for (int i = 1; i <= n; i++) {
            if (graph[x][i] == 1 && !visited[i]) { // 연결되어 있고 방문하지 않았다면
                dfs(i); 
            }
        }
    }

    static void bfs(int x) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(x); // bfs 시작점
        visited[x] = false; // 방문 표시

        while (!q.isEmpty()) {
            int node = q.poll(); 
            System.out.print(node + " ");

            for (int i = 1; i <= n; i++) {
                if (graph[node][i] == 1 && visited[i]) { // 연결되어 있고 방문하지 않았다면
                    q.offer(i); // 큐에 넣어줌
                    visited[i] = false; // 방문 표시
                }
            }
        }
    }



}