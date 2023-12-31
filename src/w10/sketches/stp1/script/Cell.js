class Cell {
  constructor(x, y, w, h, state, idx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.nextState = state;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    const idxList = [
      this.idx - colNum - 1,
      this.idx - colNum,
      this.idx - colNum + 1,
      this.idx + 1,
      this.idx + colNum + 1,
      this.idx + colNum,
      this.idx + colNum - 1,
      this.idx - 1,
    ];

    const myCol = this.idx % colNum;
    const myRow = floor(this.idx / colNum);

    if (myCol === 0) {
      idxList[0] = -1;
      idxList[6] = -1;
      idxList[7] = -1;
    }
  }

  calcNextState() {
    let cnt = 0;
    this.friends.forEach((eachFriend) => {
      if (eachFriend?.state) {
        cnt++;
      }
    });
    if (this.state) {
      if (cnt < 2 || cnt > 3) {
        this.nextState = flase;
      } else {
        this.nextState = this.state;
      }
    } else {
      if (cnt === 3) {
        this.nextState = true;
      } else {
        this.nextState = this.state;
      }
    }
  }

  updateState() {
    this.state = this.nextState;
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
