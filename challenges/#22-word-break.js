/**
 *
 * @param {str[]} dict
 * @param {str} str
 *
 * given a dictionary of strings and a string of words without spaces, return the original sentence comprised of the strings in the dict in an array
 * example:
 * (['the', 'quick', 'brown', 'fox'], 'thequickbrownfox') => ['the', 'quick', 'brown', 'fox']
 * (['bed', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond') => ['bedbath', 'and', 'beyond]
 */

function wordBreak(dict, str) {
  let output = [];
  function bottomUp(sentence, wordsArr = []) {
    if (sentence === '') {
      output = wordsArr;
      return;
    }

    for (const word of dict) {
      if (sentence.indexOf(word) === 0) {
        const slicedSentence = sentence.slice(word.length);
        bottomUp(slicedSentence, [...wordsArr, word]);
      }
    }
  }

  bottomUp(str);
  return output;
}

// console.log(wordBreak(['the', 'quick', 'brown', 'fox'], 'thequickbrownfox'));
// console.log(wordBreak(['bed', 'bedbath', 'hello', 'and', 'beyond'], 'bedbathandbeyond'));

module.exports = { wordBreak };
