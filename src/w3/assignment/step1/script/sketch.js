let pos;
let vel;
let acc;
let mouse2;
let circle;
let vectorToMouse;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector();
  vel = createVector();
  acc = createVector();
  mouse2 = createVector(mouseX, mouseY);
  circle = createVector(pos.x, pos.y);
  vectorToMouse = createVector();
  // vectorToMouse = p5.Vector.sub(createVector(kouse2), circle);
}

function draw() {
  background('white');
  update();
  displayVectors();
  show();
  checkEdges();
}
function update() {
  // stroke(0);
  // strokeWeight(2);
  // fill(127);
  // circle(pos.x, pos.y, 50);
  // acc = p5.Vector.random2D();
  // acc.mult(2);
  // vel.add(acc);
  // vel.limit(10);
  // pos.add(vel);
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 70);
  acc = p5.Vector.random2D();
  acc.mult(2);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
  vectorToMouse = p5.Vector.sub(mouse2, circle);
}

function displayVectors() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}

function show() {
  strokeWeight(2);
  stroke('black');
  // line(vectorToMouse.x, vectorToMouse.y, mouseX, mouseY);
  // line(pos.x + vectorToMouse.x, pos.y + vectorToMouse.y, mouseX, mouseY);
  line(pos.x + vectorToMouse.x, pos.y + vectorToMouse.y, mouseX, mouseY);

  // line(pos.x, pos.y, mouseX, mouseY);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }

  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
