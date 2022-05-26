/**
 * write a function that takes in the adjancency list of an undirected graph that returns the size of the largest component
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

/**
 * @param {object} graph
 * traverse the graph adjency list and use DFS to save the visited nodes in a set
 *
 */
const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (const node in graph) {
    if (!visited.has(parseInt(node))) {
      const size = sizeOfComponent(graph, parseInt(node), visited);
      longest = size > longest ? size : longest;
    }
  }
  return longest;
};

const sizeOfComponent = (graph, curr, visited) => {
  if (visited.has(curr)) return 0;
  visited.add(curr);
  let size = 1;
  for (const neighbor of graph[curr]) {
    size += sizeOfComponent(graph, neighbor, visited);
  }
  return size;
};

console.log(largestComponent(graph)); // => 4
