/**
 * write a function that takes in the adjancency list of an undirected graph that returns the number of connected components within the graph
 */

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponentsCount = (graph) => {
  // loop through the keys of the graph (for..in) and iterate through the neighbors (for..of)
  // use BFS to traverse the connected nodes.
  // use a visited set to remember the visited nodes
  let numComponents = 0;
  const visited = new Set();

  const BFS = (node) => {
    const queue = [node];

    while (queue.length) {
      const curr = queue.shift();
      if (!visited.has(curr)) visited.add(curr);
      for (const neighbor of graph[curr]) {
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }
  };

  for (const node in graph) {
    if (!visited.has(parseInt(node))) {
      numComponents += 1;
      visited.add(parseInt(node));
      for (const neighbor of graph[node]) {
        BFS(neighbor);
      }
    }
  }

  return numComponents;
};

console.log(connectedComponentsCount(graph));
