class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        if(image[sr][sc] == color) {
            return image;
        }

        int oldColor = image[sr][sc];
        dfs(image, sr, sc, oldColor, color);
        return image;
    }
    
    void dfs(int[][] image, int sr, int sc, int oldColor, int color){

        if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != oldColor) {
            return;
        }

        image[sr][sc] = color;
        dfs(image, sr - 1, sc, oldColor, color);
        dfs(image, sr + 1, sc, oldColor, color);
        dfs(image, sr, sc - 1, oldColor, color);
        dfs(image, sr, sc + 1, oldColor, color);
    }
}