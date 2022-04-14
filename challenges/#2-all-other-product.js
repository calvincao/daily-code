/*
Given an array of integers, return an array such that each element at i of the new array is the product of all the numbers in the origin except the one at i
*/

const allOtherProduct = (nums) => {
  const result = new Array(nums.length).fill(0);
  let zeroIndices = [];
  let product = 1;
  // go through the nums array and record where zeros occur
  // if there are more than 1 zero in the array, return array filled with zeroes
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroIndices.push(i);
      if (zeroIndices.length === 2) return new Array(nums.length).fill(0);
    } else product *= nums[i];
  }
  // if there is a single zero, place product where the zero is
  if (zeroIndices.length === 1) {
    result[zeroIndices[0]] = product;
    return result;
  }
  // otherwise, divide product by each value at its index
  for (let i = 0; i < nums.length; i++) {
    result[i] = product / nums[i];
  }
  return result;
};

module.exports = { allOtherProduct };
