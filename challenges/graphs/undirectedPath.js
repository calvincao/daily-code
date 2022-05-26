/**
 * UNDIRECTED PATH
 * @argument (graph, root, destination)
 * @returns boolean
 * given the adjacency map of a UNDIRECTED (birectional) graph, a root node, and a destination node, determine if it is possible to get from the root to the destination
 *
 * edges
 * ['i', 'j']
 * ['k', 'i']
 * ['m', 'k']
 * ['k', 'l']
 * ['o', 'n']
 */
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const graphBuilder = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    graph[a].push(b);
    if (!(b in graph)) graph[b] = [];
    graph[b].push(a);
  }
  return graph;
};

const graph = graphBuilder(edges);

const undirectedPath_DFS = (graph, curr, destination, visited = new Set()) => {
  if (curr === destination) return true;
  visited.add(curr);
  for (const neighbor of graph[curr]) {
    if (!visited.has(neighbor) && undirectedPath_DFS(graph, neighbor, destination, visited))
      return true;
  }
  return false;
};

console.log(undirectedPath_DFS(graph, 'i', 'k'));
console.log(undirectedPath_DFS(graph, 'i', 'o'));
console.log(undirectedPath_DFS(graph, 'n', 'o'));
