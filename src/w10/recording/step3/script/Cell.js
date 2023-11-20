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
    this.rule = [
      false, //111 = 7
      false, //110 = 6
      false, //101 = 5
      true, //100 = 4
      true, //011 = 3
      true, //010 = 2
      true, //001 = 1
      false, //000 = 0
    ];
  }

  addFriends(cellArray) {
    const idxList = [
      this.idx - 1, //왼
      this.idx + 1, //오
    ];

    const myCol = this.idx;

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
    let binaryString = '';
    binaryString += this.friends[0]?.state ? '1' : '0';
    // 바이너리스트링에 플러스를 하는데, 만약에 내 왼쪽에 있는애가 트루면, 1을 넣어주고 그게 아니면 0을 넣어줘라
    binaryString += this.state ? '1' : '0';
    binaryString += this.friends[1]?.state ? '1' : '0';
    const decimalNum = parseInt(binaryString, 2);
    // 2진수를 10진수로 만든다
    const ruleIdx = this.rule.length - 1 - decimalNum;
    this.nextState = this.rule[ruleIdx];
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
