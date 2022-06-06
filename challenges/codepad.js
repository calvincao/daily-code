const pacificAtlantic = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const accessible = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (toPacific(grid, r, c) && toAtlantic(grid, r, c)){
        accessible.push([r, c]);
      }
    }
  }
  return accessible;
};

const toPacific = (grid, r, c, visited = new Set(), prevHeight = grid[r][c]) => {
  if (r === 0 || c === 0) return true;
  if (r === grid.length || c === grid[0].length) return false;

  const loc = r + ',' + c;
  if (visited.has(loc)) return false;
  visited.add(loc);

  const currHeight = grid[r][c];
  if (prevHeight <= currHeight) return false;

  const up = toPacific(grid, r - 1, c, visited, currHeight);
  const down = toPacific(grid, r + 1, c, visited, currHeight);
  const right = toPacific(grid, r, c + 1, visited, currHeight);
  const left = toPacific(grid, r, c - 1, visited, currHeight);
  return up || down || right || left;
};


const toAtlantic = (grid, r, c, visited = new Set(), prevHeight = grid[r][c]) => {
  if (r === grid.length || c === grid[0].length) return true;
  if (r > 0 || c > 0) return false;

  const loc = r + ',' + c;
  if (visited.has(loc)) return false;
  visited.add(loc);

  const currHeight = grid[r][c];
  if (prevHeight <= currHeight) return false;

  const up = toPacific(grid, r - 1, c, visited, currHeight);
  const down = toPacific(grid, r + 1, c, visited, currHeight);
  const right = toPacific(grid, r, c + 1, visited, currHeight);
  const left = toPacific(grid, r, c - 1, visited, currHeight);
  return up || down || right || left;
};

const grid = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(grid));
