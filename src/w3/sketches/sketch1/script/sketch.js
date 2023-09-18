let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background('white');
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
}
