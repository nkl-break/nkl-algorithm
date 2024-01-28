/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const row = image.length;
  const col = image[0].length;
  const visited = new Array(row)
    .fill(false)
    .map(() => new Array(col).fill(false));

  recurse(image, sr, sc, image[sr][sc], color, visited);

  function recurse(image, sr, sc, origin, color, visited) {
    if (image[sr][sc] !== origin) {
      return;
    }

    image[sr][sc] = color;
    visited[sr][sc] = true;

    for (const direction of directions) {
      const [dx, dy] = direction;

      const nx = sr + dx;
      const ny = sc + dy;

      if (nx < 0 || nx >= image.length || ny < 0 || ny >= image[0].length) {
        continue;
      } else if (visited[nx][ny]) {
        continue;
      }

      recurse(image, nx, ny, origin, color, visited);
    }
  }

  return image;
};
