let cells = [];

rule = [
  false, //111 = 7
  false, //110 = 6
  false, //101 = 5
  true, //100 = 4
  true, //011 = 3
  true, //010 = 2
  true, //001 = 1
  false, //000 = 0
];

function setRule(denaryNum) {
  let binaryString = denaryNum.toString(2);
  while (binaryString.length < 8) {
    binaryString = '0' + binaryString;
  }
  for (let idx = 0; idx < 8; idx++) {
    rule[idx] = binaryString[idx] === '1';
  }
}

const colNum = 51,
  rowNum = 1;

let w, h;

let currentGen = 0;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  randomSeed(1);

  w = width / colNum;
  h = w;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      //   const state = random() < 0.5;
      let state = false;
      if (col === floor(colNum / 2)) {
        state = true;
      }
      const idx = colNum * row + col;
      const newCell = new Cell(x, y, w, h, state, idx);
      cells.push(newCell);
    }
  }

  cells.forEach((eachCell) => {
    eachCell.addFriends(cells);
  });

  setRule(54);

  console.log(cells);

  frameRate(4);
  background('white');
  //   noLoop();
}

function draw() {
  background('white');

  const newGen = [];
  //   만들어낸 새로운 친구들을 newGen이라는 임시 바구니에 담아놓는다.
  for (let col = 0; col < colNum; col++) {
    const idx = colNum * currentGen + col;
    cells[idx].calcNextState();
    // 매번 다음 스테이트 계산을 하고
    const newCell = cells[idx].createNextGen();
    // 새로운 친구들을 만들어 낸다
    newGen.push(newCell);
    cells.push(newCell);
  }

  //   cells.forEach((eachCell) => {
  //     eachCell.updateState();
  //   });

  //   newGen.forEach((eachNewGen) => {
  //     cells.push(eachNewGen);
  //   });

  newGen.forEach((eachNewGen) => {
    eachNewGen.addFriends(cells);
    // 새로만들어낸 세대들만 주위에 누가 있는지 체크하게함
  });

  currentGen++;

  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
