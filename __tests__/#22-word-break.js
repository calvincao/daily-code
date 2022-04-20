const { wordBreak } = require('../challenges/#22-word-break');

describe('wordBreak', () => {
  it('should return all words in a dictionary comprised only of those words', () => {
    const sentence = 'thequickbrownfox';
    const dict = ['the', 'quick', 'brown', 'fox'];
    const output = ['the', 'quick', 'brown', 'fox'];
    expect(wordBreak(dict, sentence)).toEqual(output);
  });
  it('should only return combinations that complete the whole sentence', () => {
    const sentence = 'bedbathandbeyond';
    const dict = ['bed', 'bedbath', 'and', 'beyond'];
    const output = ['bedbath', 'and', 'beyond'];
    expect(wordBreak(dict, sentence)).toEqual(output);
  });
  it('should return an empty array if dict cannot complete sentence', () => {
    const sentence = 'bedbathandbeyondinthemall';
    const dict = ['bed', 'bedbath', 'and', 'beyond'];
    const output = [];
    expect(wordBreak(dict, sentence)).toEqual(output);
  });
});
