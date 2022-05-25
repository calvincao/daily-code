/**
 * To search via breadth first, implement a queue (first in first out)
 * use this pattern to look for something in a ripple pattern
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

const dfs = (graph, root) => {
  const queue = [root];
  while (queue.length) {
    const curr = queue.shift();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
};

dfs(graph, 'a');
