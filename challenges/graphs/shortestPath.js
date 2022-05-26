/**
 * given an edge list, determine the shortest path from point A to point B
 * return -1 if there is no possible path from A to B
 * use BFS to radially search outward from point A for point B
 */

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const graphBuilder = (edges) => {
  const graph = {};
  for (const edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const graph = graphBuilder(edges);

const shortestPath = (graph, nodeA, nodeB) => {
  const queue = [{ node: nodeA, length: 0 }];
  const visited = new Set([nodeA]);
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.node === nodeB) return curr.length;
    for (const neighbor of graph[curr.node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ node: neighbor, length: curr.length + 1 });
      }
    }
  }
  return -1;
};

console.log(shortestPath(graph, 'w', 'z')); // --> 2
