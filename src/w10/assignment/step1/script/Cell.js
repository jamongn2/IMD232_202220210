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
    //왼쪽 귀퉁이
    if (myCol === 0) {
      idxList[0] = -1;
      idxList[6] = -1;
      idxList[7] = -1;
    }
    //오른쪽 귀퉁이
    else if (myCol === colNum - 1) {
      idxList[2] = -1;
      idxList[3] = -1;
      idxList[4] = -1;
    }
    //위쪽 귀퉁이
    if (myRow === 0) {
      idxList[0] = -1;
      idxList[1] = -1;
      idxList[2] = -1;
    }
    //아래쪽 귀퉁이
    else if (myRow === rowNum - 1) {
      idxList[4] = -1;
      idxList[5] = -1;
      idxList[6] = -1;
    }

    idxList.forEach((eachIdx) => {
      if (eachIdx !== -1) {
        this.friends.push(cellArray[eachIdx]);
      }
    });
  }

  calcNextState() {
    let cntRock = 0;
    let cntPaper = 0;
    let cntScissors = 0;

    this.friends.forEach((eachFriend) => {
      switch (eachFriend?.state) {
        case 'rock':
          cntRock++;
          break;
        case 'paper':
          cntPaper++;
          break;
        case 'scissors':
          cntScissors++;
          break;
      }
    });

    if (this.state === 'rock') {
      if (cntPaper > 2) {
        this.nextState = 'paper';
      } else {
        this.nextState = 'rock';
      }
    } else if (this.state === 'paper') {
      if (cntScissors > 2) {
        this.nextState = 'scissors';
      } else {
        this.nextState = 'paper';
      }
    } else if (this.state === 'scissors') {
      if (cntRock > 2) {
        this.nextState = 'rock';
      } else {
        this.nextState = 'scissors';
      }
    }
  }

  updateState() {
    this.state = this.nextState;
  }

  display() {
    push();
    translate(this.x, this.y);

    switch (this.state) {
      case 'rock':
        fill(255, 0, 0); // 빨강색
        break;
      case 'paper':
        fill(0, 255, 0); // 초록색
        break;
      case 'scissors':
        fill(0, 0, 255); // 파란색
        break;
    }

    rect(0, 0, this.w, this.h);
    pop();
  }
}
