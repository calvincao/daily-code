/**
 * given a 2-D array of values representing water ('W') and land ('L'), determine the size of the smallest contiguous island
 */

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const minIsland_BFS = (grid) => {
  const visited = new Set();
  const rows = grid.length;
  const cols = grid[0].length;
  let smallest = Infinity;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const pos = r + ',' + c;
      if (grid[r][c] === 'L' && !visited.has(pos)) {
        const currSize = islandSize_BFS(grid, r, c, visited);
        smallest = currSize < smallest ? currSize : smallest;
      }
    }
  }

  return smallest;
};

const islandSize_BFS = (grid, r, c, visited) => {
  let size = 0;
  if (grid[r][c] === 'W') return size;
  const pos = r + ',' + c;
  if (visited.has(pos)) return size;
  const queue = [[r, c]];
  while (queue.length > 0) {
    [r, c] = queue.shift();
    const pos = r + ',' + c;
    if (!visited.has(pos)) {
      visited.add(pos);
      size += 1;
      if (grid[r + 1] && grid[r + 1][c] === 'L') queue.push([r + 1, c]);
      if (grid[r - 1] && grid[r - 1][c] === 'L') queue.push([r - 1, c]);
      if (grid[r][c + 1] === 'L') queue.push([r, c + 1]);
      if (grid[r][c - 1] === 'L') queue.push([r, c - 1]);
    }
  }
  return size;
};

const minIsland_DFS = (grid) => {
  const visited = new Set();
  const rows = grid.length;
  const cols = grid[0].length;
  let smallest = Infinity;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const currSize = islandSize_DFS(grid, r, c, visited);
      smallest = currSize < smallest && currSize > 0 ? currSize : smallest;
    }
  }
  return smallest;
};

const islandSize_DFS = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += islandSize_DFS(grid, r + 1, c, visited);
  size += islandSize_DFS(grid, r - 1, c, visited);
  size += islandSize_DFS(grid, r, c + 1, visited);
  size += islandSize_DFS(grid, r, c - 1, visited);

  return size;
};

console.log(minIsland_DFS(grid));
console.log(minIsland_BFS(grid));
