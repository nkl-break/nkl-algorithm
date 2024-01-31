const solution = (n, arr, n1, arr1) => {
  const set = new Set(arr);

  const result = [];
  arr1.forEach((item) => (set.has(item) ? result.push(1) : result.push(0)));

  console.log(result.join("\n"));
};

const convertToInput = (input) => {
  const n = +input[0];
  const arr = input[1].split(" ").map((item) => parseInt(item));
  const n1 = +input[2];
  const arr1 = input[3].split(" ").map((item) => parseInt(item));
  return [n, arr, n1, arr1];
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
  solution(...convertToInput(input));
});
