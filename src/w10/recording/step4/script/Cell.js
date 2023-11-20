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
      this.idx - 1, //왼
      this.idx + 1, //오
    ];

    const myCol = this.idx % colNum;
    // 2번째 3번째 줄에서 잘 실행되기 위해 colNum을 해줘야함
    // 예를들어 7번째 셀을 7로 나눠야 나머지가 0이됌

    //왼쪽 귀퉁이
    if (myCol === 0) {
      idxList[0] = -1;
    }
    //오른쪽 귀퉁이
    else if (myCol === colNum - 1) {
      idxList[1] = -1;
    }

    idxList.forEach((eachIdx) => {
      this.friends.push(cells[eachIdx]);
    });
  }

  calcNextState() {
    // state를 계산하는 방식
    // 이전에는 내 주위의 true가 몇개인가를 셌다면 지금은 모양을 따진다
    let binaryString = '';
    binaryString += this.friends[0]?.state ? '1' : '0';
    binaryString += this.state ? '1' : '0';
    binaryString += this.friends[1]?.state ? '1' : '0';
    // console.log('binary', binaryString);
    const decimalNum = parseInt(binaryString, 2);
    // console.log('decimalNum', decimalNum);
    const ruleIdx = rule.length - 1 - decimalNum;
    this.nextState = rule[ruleIdx];
    // console.log(this.nextState);
  }

  updateState() {
    this.state = this.nextState;
  }

  createNextGen() {
    return new Cell(
      // 나 자신을 뱉어내게 함
      this.x,
      this.y + this.h,
      //   내 현재 y에서 h만큼 띄워서 배치
      this.w,
      this.h,
      this.nextState,
      this.idx + colNum
      //   한줄 건너뛰게끔
    );
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
