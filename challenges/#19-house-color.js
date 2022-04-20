/**
 * A builder is looking to build a row of N houses that can be of K different colors
 * He wants to minimize cost while ensuring that no 2 neighbors are the same color
 * Given a N by K matrix where nth row and kth column represents cost to build the
 * nth house with kth color, give the lowest possible cost to paint all the houses
 *
 */

const findCost = (costs) => {
  // input: 2D array of numbers representing cost
  // output: num representing the lowest possible cost
  // find the lowest cost taking one cost of each row where each subsequent row cannot have the same index
  // create another 2D array with the same dimensions as the input array to store the costs
  const minCost = costs.slice();
  const row = costs.length;
  const col = costs[0].length;

  const paint = (r, c, houses) => {
    if (r === row) return houses[r][c]
  };
};

const houses = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 10],
];

console.log(findCost(houses));
