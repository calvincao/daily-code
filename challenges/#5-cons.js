/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4
*/

const cons = (a, b) => {
  const pair = (f) => {
    return f(a, b)
  }
  return pair;
}

const car = (fn) => {
  const cb = (a, b) => {
    return a;
  }
  return fn(cb);
};

const cdr = (fn) => {
  const cb = (a, b) => {
    return b;
  }
  return fn(cb);
};

car(cons(3, 4)) === 3
car(cons(3, 4)) === 4

module.exports = { cons, car, cdr };