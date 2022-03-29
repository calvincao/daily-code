/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const twoSum = (nums, k) => {
  const cache = {};
  for (const num of nums) {
    const comp = k - num;
    if (cache.hasOwnProperty(num)) return true;
    cache[comp] = true;
  }
  return false;
};

module.exports = { twoSum };
