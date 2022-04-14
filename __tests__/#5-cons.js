const { cons, car, cdr } = require('../challenges/#5-cons');

describe('cons test', () => {
  const input = cons(3, 4);
  it('car returns the first value of a pair', () => {
    let output = 3;
    expect(car(input)).toEqual(output);
  })
  it('cdr returns the second value of a pair', () => {
    let output = 4;
    expect(cdr(input)).toEqual(output)
  })
})