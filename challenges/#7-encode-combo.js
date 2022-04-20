/**
 * given the mapping a=1, b=2,... z=26 and an encoded message, count the num of ways it can be decoded
 * example: 111 would be 3 combinations since it could represent 'aaa', 'ka', and 'ak'
 * assume all messages are decodeable. '001' is not allowed
 * input: string comprised of numbers from 0-9
 * output: number (combination of decoded messages)
 */

const encodeCombo = (s, i = 0) => {
  if (!s.length) return 0;
  if (s[i] === '0') return 0;
  if (i >= s.length - 1) return 1;
  return encodeCombo(s, i + 1) + (s[i] + s[i + 1] < 27 ? encodeCombo(s, i + 2) : 0);
};
console.log(encodeCombo('1221'));

module.exports = { encodeCombo };
