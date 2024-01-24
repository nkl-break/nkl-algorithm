const bfsQueue = (graph, start) => {
  const visited = [];
  let needVisit = [start];

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
    }
  }

  return visited;
};

const dfsStack = (graph, start) => {
  const visited = [];
  let needVisit = [start];

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};

const answer = [];

const dfsRecursive = (visited, graph, start) => {
  if (visited[start]) {
    return;
  }

  visited[start] = true;
  answer.push(start);

  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (visited[next] === false) {
      dfsRecursive(visited, graph, next);
    }
  }

  return answer;
};

const solution = (graph, start) => {
  const dfsStackResult = dfsStack(graph, start).join(" ");
  console.log(dfsStackResult);
  const bfsResult = bfsQueue(graph, start).join(" ");
  console.log(bfsResult);

  // let visited = new Array(graph.length).fill(false);
  // console.log(graph);
  // const dfsRecursiveResult = dfsRecursive(visited, graph, start).join(" ");
  // console.log(dfsRecursiveResult);
};

const convertToInput = (input) => {
  let [n, edge, start] = input.shift().split(" ").map(Number);
  let graph = [...Array(n + 1)].map((e) => []);

  for (let i = 0; i < edge; i++) {
    let [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }
  return [graph, start];
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
