class Cell {
  constructor(x, y, w, h, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
  }

  addFriends(cellArray) {
    this.friends = [
      cellArray[this.idx - colNum - 1],
      cellArray[this.idx - colNum],
      cellArray[this.idx - colNum + 1],
      cellArray[this.idx + 1],
      cellArray[this.idx + colNum + 1],
      cellArray[this.idx + colNum],
      cellArray[this.idx + colNum - 1],
      cellArray[this.idx - 1],
    ];
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
