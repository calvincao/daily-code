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

let newCanvas = new Canvas_Momento(2, 2);
console.log(newCanvas.paint(0, 0, 'O'));
console.log(newCanvas.paint(0, 1, 'O'));
console.log(newCanvas.paint(1, 0, 'O'));
console.log(newCanvas.paint(1, 1, 'O'));
console.log(newCanvas.undo());
console.log(newCanvas.undo());
console.log(newCanvas.undo());
console.log(newCanvas.undo());
console.log(newCanvas.paint(0, 0, 'X'));
console.log(newCanvas.redo());
console.log(newCanvas.redo());
