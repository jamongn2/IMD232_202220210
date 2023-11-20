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
      this.friends.push(cells[eachIdx]);
    });
  }

  // calcNextState = 내 주위의 몇명의 친구들이 죽어있고 몇명의 친구들이 살아있는지 판단,
  //  다음에 내가 무슨 상태로 변해야 할지 계산해봄
  // 내 주변에 true인 친구들의 개수를 세면된다
  calcNextState() {
    let cnt = 0;
    this.friends.forEach((eachFriend) => {
      if (eachFriend?.state) {
        cnt++;
        // cnt가 0인 상태에서 내 친구들에 대해서 여덟번 돌면서 state가 true인 경우에
        // cnt가 1씩 증가한다.
      }
    });

    if (this.state) {
      if (cnt < 2 || cnt > 3) {
        this.nextState = false;
        // state가 2개 미만이거나 3보다 크면 주위의 친구들이 죽는다
      } else {
        this.nextState = this.state;
      }
    } else {
      if (cnt === 3) {
        // 만약 true가 정확히 3개이면
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
