let pos;
let vel;
let acc;
let mouse2;
let circle;
let vectorToMouse;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector();
  acc = createVector();
  // vectorToMouse = p5.Vector.sub(mouse2, circle);
  // vectorToMouse = p5.Vector.sub(createVector(kouse2), circle);
}

function draw() {
  background('white');
  mouse2 = createVector(mouseX, mouseY);
  circle = createVector(pos.x, pos.y);
  vectorToMouse = p5.Vector.sub(mouse2, circle);
  update();
  displayVectors();
  noStroke();
  fill(0);
}

function update() {
  // stroke(0);

  vectorToMouse.normalize();
  vectorToMouse.mult(0.1);
  vel.add(vectorToMouse);
  vel.limit(10);
  pos.add(vel);

  // vectorToMouse = p5.Vector.sub(mouse2, circle);
}

function displayVectors() {
  ellipse(pos.x, pos.y, 70);
  stroke('red');
  line(
    pos.x,
    pos.y,
    pos.x + vectorToMouse.x * 100,
    pos.y + vectorToMouse.y * 100
  );
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);

  // stroke('red');
  // line(circle.x, circle.y, mouseX, mouseY);

  // mouse2.mult(0.5);
  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);
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
