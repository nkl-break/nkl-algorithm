const getRipeTomatoes = (board) => {
  const ripeTomatoes = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        ripeTomatoes.push([i, j]);
      }
    }
  }

  return ripeTomatoes;
};

const solution = (n, m, board) => {
  const q = getRipeTomatoes(board);
  const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  while (q.length !== 0) {
    const [x, y] = q.shift();

    if (visited[x][y]) {
      continue;
    }

    visited[x][y] = true;

    for (const direction of directions) {
      const nx = direction[0];
      const ny = direction[1];

      const dx = nx + x;
      const dy = ny + y;

      if ((dx < 0) | (dx >= n) | (dy < 0) | (dy >= m)) {
        continue;
      } else if (visited[dx][dy] | (board[dx][dy] !== 0)) {
        continue;
      }

      q.push([dx, dy]);
      board[dx][dy] = board[x][y] + 1;
    }
  }

  let answer = 0;
  for (const row of board) {
    for (const col of row) {
      if (col === 0) {
        return -1;
      }
    }

    answer = Math.max(Math.max(...row), answer);
  }

  return answer - 1;
};

const convertToInput = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const board = input
    .slice(1, n.length)
    .map((item) => item.split(" ").map(Number));
  return [m, n, board];
};

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

r1.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const result = solution(...convertToInput(input));
  console.log(result);
});
