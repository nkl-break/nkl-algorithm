import java.io.*;
import java.util.*;

public class Main {
    static char[][] floor;
    static boolean[][] visited;
    static int m, n;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        floor = new char[n][m];
        visited = new boolean[n][m];

        for (int i = 0; i < n; i++) {
            String str = br.readLine();
            for (int j = 0; j < m; j++) {
                floor[i][j] = str.charAt(j);
            }
        }


        int cnt = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(visited[i][j]) {
                    continue;
                }
                if(floor[i][j] == '-') {
                    dfs(i, j, true);
                }
                else {
                    dfs(i, j, false);
                }
                cnt++;
            }
        }

        System.out.println(cnt);


    }

    private static void dfs(int i, int j, boolean row) {
        visited[i][j] = true;
        if(row) {
            j++;
            if(j < m && floor[i][j] == '-') {
                dfs(i, j, true);
            }
        }
        else {
            i++;
            if(i < n && floor[i][j] != '-') {
                dfs(i, j, false);
            }
        }

    }

}