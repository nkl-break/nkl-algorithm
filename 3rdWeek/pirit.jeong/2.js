const solution = (n, arr) => {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let currentItem;
  for (const item of arr) {
    // 진행하고 있는 currentItem의 [1]보다 새로운 아이템의 [0]이 크거나 같아야함.
    if (!currentItem || currentItem[1] <= item[0]) {
      answer += 1;
      currentItem = item;
    }
  }

  return answer;
};

const convertToInput = (input) => {
  const n = +input[0];
  const board = input
    .slice(1, n.length)
    .map((item) => item.split(" ").map(Number));
  return [n, board];
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
