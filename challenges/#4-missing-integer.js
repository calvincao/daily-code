/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

[3, 4, -1, 1] => 2
[1, 2, 0] => 3
*/

const missingInt = (nums) => {
  // sort nums in place
  const positiveNums = nums.filter((num) => num > 0);
  if (!positiveNums.length) return 1;
  positiveNums.sort((a, b) => a - b);
  for (let i = 0; i < positiveNums.length; i++) {
    if (positiveNums[i] !== i + 1) return i + 1;
  }
  return positiveNums[positiveNums.length - 1] + 1;
};

const arr = [1, 2, 3];
console.log(missingInt(arr));

module.exports = { missingInt };
