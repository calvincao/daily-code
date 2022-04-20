const { encodeCombo } = require('../challenges/#7-encode-combo');

describe('encode combo test', () => {
  it('passes test with 3 1s', () => {
    expect(encodeCombo('111')).toEqual(3);
  });
  it('passes test with 5 1s', () => {
    expect(encodeCombo('1111')).toEqual(5);
  });
  it('passes tests with numbers that are greater than 26', () => {
    expect(encodeCombo('1261')).toEqual(3);
  });
  it('passes tests with numbers that can be intepreted as multiple alphabets', () => {
    expect(encodeCombo('1221')).toEqual(5);
  });
});
