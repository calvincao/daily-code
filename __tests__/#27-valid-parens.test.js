const { isValid } = require('../challenges/#27-valid-parens');

describe('validParens', () => {
  let input = '';
  it('should return true with valid parens with arbitrary nesting', () => {
    input = '[]';
    expect(isValid(input)).toBe(true);
    input = '([])';
    expect(isValid(input)).toBe(true);
    input = '[{}]()[{{}}]';
    expect(isValid(input)).toBe(true);
    input = '([])[]({})';
    expect(isValid(input)).toBe(true);
  });
  it('should return false when input is inbalanced', () => {
    input = '][';
    expect(isValid(input)).toBe(false);
    input = '([)}';
    expect(isValid(input)).toBe(false);
    input = '((()';
    expect(isValid(input)).toBe(false);
    input = '()))';
    expect(isValid(input)).toBe(false);
  });
});
