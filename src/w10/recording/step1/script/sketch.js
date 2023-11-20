let cells = [];

const colNum = 100,
  rowNum = colNum;

let w, h;

let patternBlock = {
  width: 4,
  height: 4,
};

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  randomSeed(1);

  w = width / colNum;
  h = height / rowNum;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      //   true혹은 false값이 되는 구문 ? 참일경우사용할값 : 거짓일경우사용할값
      //   let state = random() < 0.5 ? false : true;
      let state = random() < 0.5;
      const idx = colNum * row + col;
      const newCell = new Cell(x, y, w, h, state, idx);
      cells.push(newCell);
    }
  }

  cells.forEach((eachCell) => {
    eachCell.addFriends(cells);
  });

  console.log(cells);

  background('white');
}

function draw() {
  background('white');

  cells.forEach((eachCell) => {
    eachCell.calcNextState();
  });
  cells.forEach((eachCell) => {
    eachCell.updateState();
  });
  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
