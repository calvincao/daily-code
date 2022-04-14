const { missingInt } = require('../challenges/#4-missing-integer');

describe('missing int test', () => {
  let input, output;
  it('correctly finds missing int in middle of array of nums', () => {
    input = [3, 4, 1, 0, 7];
    output = 2;
    expect(missingInt(input)).toEqual(output);
  });
  it('correctly finds mising int at the end of array of nums', () => {
    input = [1, 2, 3, 4];
    output = 5;
    expect(missingInt(input)).toEqual(output);
  });
  it('correctly finds missing int in array of negative nums', () => {
    input = [-1, -2, -3, -8];
    output = 1;
    expect(missingInt(input)).toEqual(output);
  });
});
