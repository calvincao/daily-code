/**
 * @argument (graph, root, destination)
 * @returns boolean
 * given the adjacency map of a graph, a root node, and a destination node, determine if it is possible to get from the root to the destination
 */

const graph = {
  a: ['b', 'd'],
  b: ['c'],
  c: [],
  d: ['b', 'f'],
  e: ['d'],
  f: [],
};

const hasPath_BFS = (graph, root, destination) => {
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination) return true;
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const hasPath_DFS_iterative = (graph, root, destination) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === destination) return true;
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

const hasPath_DFS_recursive = (graph, root, destination) => {
  if (root === destination) return true;
  for (const neighbor of graph[root]) {
    if (hasPath_DFS_recursive(graph, neighbor, destination) === true) return true;
  }
  return false;
};

console.log(hasPath_BFS(graph, 'c', 'f'));
console.log(hasPath_DFS_iterative(graph, 'b', 'f'));
console.log(hasPath_DFS_recursive(graph, 'b', 'f'));
