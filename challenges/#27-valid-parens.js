// create a dictionary where each key is opening parens and value is closing parens
// read through each element of the string and if the value is a key (opener) place on stack
// if it it's a value (closer) that matches the topmost value on the stack, pop the topmost value off the stack
// if it's a closer that doesn't match the stack, return false since it's not balanced
// after all characters in str input are read, if there are any values left in the stack, return false
// otherwise, return true
function isValid(str) {
  const dict = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];
  for (const char of str) {
    if (char in dict) {
      stack.push(char);
    } else if (dict[stack[stack.length - 1]] === char) {
      stack.pop();
    } else return false;
  }
  if (stack.length) return false;
  else return true;
}

const input = '[{}({}){[()]}]';
console.log(isValid(input));

module.exports = { isValid };
