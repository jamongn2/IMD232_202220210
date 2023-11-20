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
      let state;
      const rand = random();
      if (rand < 1 / 3) {
        state = 'rock';
      } else if (rand < 2 / 3) {
        state = 'paper';
      } else {
        state = 'scissors';
      }
      const idx = colNum * row + col;
      const newCell = new Cell(x, y, w, h, state, idx);
      cells.push(newCell);
    }
  }

  cells.forEach((eachCell) => {
    eachCell.addFriends(cells);
  });

  console.log(cells);

  frameRate(10);
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
