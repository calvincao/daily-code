/**
 * implement a Canvas class that accepts 2 arguments, row and col, and initializes a 2-D array representing a blank canvas of size row x col
 * add methods paint, undo, and redo
 * paint accepts 3 arguments (row, col, newColor) and paints the newColor at position (row, col)
 * undo reverts the canvas back to the previous state
 * redo brings the state 1 forward
 */

class Canvas_Momento {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.history = [];
    this.index = 0;
    const canvas = [];
    for (let r = 0; r < rows; r++) {
      const section = [];
      for (let c = 0; c < cols; c++) {
        section.push('W');
      }
      canvas.push(section);
    }
    this.history.push(canvas.map((row) => row.map((col) => col)));
    this.current = () => this.history[this.index];
  }

  paint(r, c, color) {
    this.history.splice(this.index + 1);
    const rowInBounds = 0 <= r && r < this.rows;
    const colInBounds = 0 <= c && c < this.cols;
    if (!rowInBounds || !colInBounds) return 'coordinates not in bound';
    const newState = this.current().map((row, rInd) =>
      row.map((col, cInd) => {
        if (r === rInd && c === cInd) return color;
        else return col;
      })
    );
    console.log(newState);
    this.history.push(newState);
    this.index += 1;
    return this.current();
  }

  undo() {
    if (this.index > 0) this.index--;
    return this.current();
  }

  redo() {
    if (this.index < this.history.length - 1) this.index++;
    return this.current();
  }
}

class Canvas_LL {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.head = new Node(rows, cols);
    this.current = this.head;
  }
  paint(row, col, color) {
    const rowInBounds = 0 <= row && row < this.rows;
    const colInBounds = 0 <= col && col < this.cols;
    if (!rowInBounds || !colInBounds) throw new Error('coordinates not in bound');
    if (row === undefined || col === undefined) throw new Error('row or col not defined');
    if (color === undefined) throw new Error('color not defined');

    const prevState = this.current.val;
    const newNode = new Node(row, col, color, prevState);
    this.current.next = newNode;
    newNode.prev = this.current;
    this.current = newNode;
  }
  undo() {
    if (this.current === this.head) return this.current;
    this.current = this.current.prev;
  }
  redo() {
    if (this.current.next === null) return this.current;
    this.current = this.current.next;
  }
}

class Node {
  constructor(row, col, color, prevState) {
    this.next = null;
    this.prev = null;
    this.val;
    if (color === undefined) {
      const initState = [];
      for (let r = 0; r < row; r++) {
        const section = [];
        for (let c = 0; c < col; c++) {
          section.push('W');
        }
        initState.push(section);
      }
      this.val = initState;
    } else {
      this.val = prevState.map((r, rInd) =>
        r.map((c, cInd) => {
          if (rInd === row && cInd === col) return color;
          else return c;
        })
      );
    }
  }
}

const ll = new Canvas_LL(3, 3);
console.table(ll.current.val);
ll.paint(0, 0, 'X');
ll.paint(1, 1, 'X');
ll.paint(2, 2, 'X');
console.table(ll.current.val);
ll.undo();
ll.undo();
ll.undo();
console.table(ll.current.val);
ll.paint(0, 2, 'Y');
console.table(ll.current.val);
ll.redo();
console.table(ll.current.val);

function checkMagazine(magazine, note) {
  if (note.length > magazine.length) return 'No';
  const magCache = {};
  for (const word of magazine) {
    if (!(word in magCache)) magCache[word] = 0;
    magCache[word] += 1;
  }
  for (const word of note) {
    if (!(word in magCache) || magCache[word] === 0) return 'No';
    magCache[word] -= 1;
  }

  return 'Yes';
}

const magazine = 'give me one grand today night'.split(' ');
const note = 'give one grand today'.split(' ');

console.log(checkMagazine(magazine, note))
