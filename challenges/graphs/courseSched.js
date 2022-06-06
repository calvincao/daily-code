var canFinish = function (numCourses, prerequisites) {
  const adjList = {};
  const cache = {};
  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  for (const edge of prerequisites) {
    const [a, b] = edge;
    adjList[a].push(b);
  }

  const DFS = (curr, visited = new Set()) => {
    if (curr in cache) return true;
    if (visited.has(curr)) return false;
    if (adjList[curr] === []) return true;
    visited.add(curr);
    for (const neighbor of adjList[curr]) {
      if (DFS(neighbor, new Set(visited)) === false) return false;
    }
    return true;
  };

  for (const key of Object.keys(adjList)) {
    if (DFS(Number(key)) === false) return false;
    cache[key] = true;
  }

  return true;
};

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
