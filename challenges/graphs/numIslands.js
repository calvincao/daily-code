/**
 * given a 2-D array of values representing water ('W') and land ('L'), determine the number of contiguous islands
 */

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const numIslands = (grid) => {
  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L' && !visited.has(`r${r}c${c}`)) {
        explore_BFS(grid, r, c, visited);
        islandCount += 1;
      }
    }
  }
  return islandCount;
};

const explore_BFS = (grid, r, c, visited) => {
  const queue = [[r, c]];
  while (queue.length) {
    const [r, c] = queue.shift();
    visited.add(`r${r}c${c}`);
    if (grid[r + 1] && grid[r + 1][c] === 'L' && !visited.has(`r${r + 1}c${c}`))
      queue.push([r + 1, c]);
    if (grid[r - 1] && grid[r - 1][c] === 'L' && !visited.has(`r${r - 1}c${c}`))
      queue.push([r - 1, c]);
    if (grid[r][c + 1] === 'L' && !visited.has(`r${r}c${c + 1}`)) queue.push([r, c + 1]);
    if (grid[r][c - 1] === 'L' && !visited.has(`r${r}c${c - 1}`)) queue.push([r, c - 1]);
  }
};

const explore_DFS = (grid, r, c, visited) => {
  // check for bounds
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || colInBounds) return false;
  // check if current location is water
  if (grid[r][c] === 'W') return false;
  // check if position has been visited
  const position = `r${r}c${c}`;
  if (visited.has(position)) return false;
  visited.add(position);
  explore_DFS(grid, r + 1, c, visited);
  explore_DFS(grid, r - 1, c, visited);
  explore_DFS(grid, r, c + 1, visited);
  explore_DFS(grid, r, c - 1, visited);
  return true;
};

console.log(numIslands(grid));
