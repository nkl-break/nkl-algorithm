/**
 * @link https://www.acmicpc.net/problem/1388
 *
 * 바닥 장식
 *
 * 집을 지을때 몇 개의 나무 판자가 필요한지 구해야 하는 문제.
 * 나무 판자의 크기는 1의 너비. 방은 직사각형, 방 안에는 정사각형으로 나누어져 있음.
 *
 * `-`와 `ㅣ`로 이루어진 바닥 장식 모양.
 * 두개의 `-`가 인접해 있고 같은 `행`에 있다면, 두개는 같은 나무 판자.
 * 두개의 `ㅣ`가 인접해 있고 같은 `열`에 있다면, 두개는 같은 나무 판자.
 *
 * 입력: 세로크기 N, 가로 크기 M, N과 M은 50이하의 자연수
 *
 * 생각한 풀이 방법:
 * 차례대로 노드를 탐색하며 탐색하지 않은 새로운 노드를 만나면 결과에 +1을 하고
 * 연결된 바닥 장식끼리는 탐색완료로 표시. 이미 탐색한 노드는 다시 탐색하지 않음.
 *
 * bfs, dfs는 상관 없음.
 */

const solution = (n, m, board) => {
  let answer = 1;
  const verticalDirection = [1, 0];
  const horizontalDirection = [0, 1];

  const q = [];
  const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
  visited[0][0] = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j]) {
        if (i === 1 && j === 0) {
        }
        visited[i][j] = true;
        answer += 1;
      }

      q.push([i, j]);

      while (q.length !== 0) {
        const [x, y] = q.shift();
        visited[x][y] = true;

        const target = board[x][y];
        const [dx, dy] =
          target === "|" ? verticalDirection : horizontalDirection;
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        } else if (board[x][y] !== board[nx][ny]) {
          continue;
        }

        if (!visited[nx][ny]) {
          q.push([nx, ny]);
        }
      }
    }
  }

  return answer;
};

const convertToInput = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const board = input.slice(1, n.length).map((item) => item.split(""));
  return [n, m, board];
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
