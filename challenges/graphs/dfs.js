/**
 * To search via depth first, implement a stack (first in, last out)
 * use this to search for something linearly before switching directions
 */

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

/**
 *       'a' --> 'b'
 *        |       |
 *       'c'     'd'
 *        |       |
 *       'e'     'f'
 */

const dfsIterative = (graph, root) => {
  const stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
};

const dfsRecursive = (graph, root) => {
  console.log(root);
  for (let neighbor of graph[root]) {
    dfsRecursive(graph, neighbor);
  }
};

dfsIterative(graph, 'a');
dfsRecursive(graph, 'a');
