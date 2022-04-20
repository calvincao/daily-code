/**
 * given a M by N matrix consisting of booleans and a starting coordinate, & an end coordinate. T represents a wall while F represents walkable path.
 * output the minimum number of steps needed to get from the start to the end. return null of there is not possible way to get to end
 *
 * base case examples: start point and end point are the same => return 0
 * if surrounded by walls or stepped on locations, return null
 */

function minStep(matrix, start, end) {
  let minimum = null;

  function bottomUp(x, y, map, steps = 0) {
    if (y === end[0] && x === end[1]) {
      minimum === null ? (minimum = steps) : (minimum = Math.min(steps, minimum));
    }
    // mark current location as true so it wont be revisited (infinite loop)
    const mapCopy = JSON.parse(JSON.stringify(map));
    mapCopy[y][x] = true;
    
    // go up if legal
    if (mapCopy[y - 1] && mapCopy[y - 1][x] === false) {
      bottomUp(x, y - 1, mapCopy, steps + 1);
    }
    // go down if legal
    if (mapCopy[y + 1] && mapCopy[y + 1][x] === false) {
      bottomUp(x, y + 1, mapCopy, steps + 1);
    }
    // go right if legal
    if (mapCopy[y][x - 1] === false) {
      bottomUp(x - 1, y, mapCopy, steps + 1);
    }
    // go left if legal
    if (mapCopy[y][x + 1] === false) {
      bottomUp(x + 1, y, mapCopy, steps + 1);
    }
    return map;
  }

  bottomUp(start[1], start[0], matrix);
  return minimum;
}

// const f = false;
// const t = true;
// const maze = [
//   [f, f, f, f],
//   [t, t, f, t],
//   [f, f, f, f],
//   [f, f, f, f],
// ];

// const start = [3, 0];
// const end = [0, 0];

// console.log(minStep(maze, start, end));

module.exports = { minStep };
