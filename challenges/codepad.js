function isPalindrome(s) {
  const regex = /[^A-Za-z0-9]/g;
  s = s.replace(regex, '');
  s = s.toLowerCase();
  const arr = s.split('');

  while (arr.length > 0) {
    if (arr.length === 1) return true;
    const last = arr.pop();
    const first = arr.shift();
    if (first !== last) return s;
  }
  return true;
}

const str = 'A man, a plan, a canal: Panama';

console.log(isPalindrome(str))
