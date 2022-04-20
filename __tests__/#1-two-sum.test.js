const { twoSum } = require('../challenges/#1-two-sum');

describe('twoSum test', () => {
  it('should return true if two numbers add up to k', () => {
    arr = [10, 15, 3, 7];
    expect(twoSum(arr, 17)).toBe(true);
    expect(twoSum(arr, 10)).toBe(true);
    expect(twoSum(arr, 22)).toBe(true);
  });
  it('should work with negative numbers', () => {
    arr = [1, 5, -3, 7];
    expect(twoSum(arr, 4)).toBe(true);
    expect(twoSum(arr, 2)).toBe(true);
    expect(twoSum(arr, -2)).toBe(true);
  });
  it('should return false if 2 numbers cannot sum up to k', () => {
    arr = [10, 15, 3, 7];
    expect(twoSum(arr, 15)).toBe(false);
    expect(twoSum(arr, 4)).toBe(false);
    expect(twoSum(arr, 3)).toBe(false);
  });
});
