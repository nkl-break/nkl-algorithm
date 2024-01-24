/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const visited = [...new Array(image.length)].map(() => new Array(image[0].length).fill(0));
    const standard = image[sr][sc];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const bfs = (row, col) => {
        const queue = [[row, col]];

        while (queue.length) {
            const [x, y] = queue.shift();

            if (visited[x][y]) continue;

            visited[x][y] = 1;
            image[x][y] = color;

            for (let i = 0; i < 4; i++) {
                const newX = x + dx[i];
                const newY = y + dy[i];

                if (newX < 0 || newX >= image.length || newY < 0 || newY >= image[0].length) continue;
                
                if (image[newX][newY] === standard) {
                    queue.push([newX, newY]);
                }

            }
            
        }
    }

    bfs(sr, sc);

    return image;
};