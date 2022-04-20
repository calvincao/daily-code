const { allOtherProduct } = require('../challenges/#2-all-other-product');

describe('allOtherProduct test', () => {
  let input, output;
  it('outputs the correct value at each index', () => {
    input = [3, 2, 1];
    output = [2, 3, 6];
    expect(allOtherProduct(input)).toEqual(output);
    input = [1, 2, 3, 4, 5];
    output = [120, 60, 40, 30, 24];
    expect(allOtherProduct(input)).toEqual(output);
  });
  it('should have only 1 non-zero value if there is 1 zero in input', () => {
    input = [0, 1, 2, 3];
    output = [6, 0, 0, 0];
    expect(allOtherProduct(input)).toEqual(output);
    input = [1, 2, 3, 0];
    output = [0, 0, 0, 6];
    expect(allOtherProduct(input)).toEqual(output);
  });
  it('all values in output are 0 if there are 2 or more zeros in input', () => {
    input = [0, 0, 2, 3, 4, 5];
    output = [0, 0, 0, 0, 0, 0];
    expect(allOtherProduct(input)).toEqual(output);
  });
});
