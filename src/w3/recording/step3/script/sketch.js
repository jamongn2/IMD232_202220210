// let x;
// let y;
let position;
// let velocityX = 3;
// let velocityY = 5;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;
  position = createVector(width / 2, height / 2);
  velocity = createVector(3, 5);
}

function draw() {
  background('white');
  //   x += velocityX;
  //   y += velocityY;
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  // if (x < 0) {
  //   velocityX *= -1;
  // } else if (x > width) {
  //   velocityX *= -1;
  // }

  if (position.x < 0 || position.x > width) {
    velocity.x *= -1;
  }

  // if (y < 0) {
  //   velocityY *= -1;
  // } else if (y > height) {
  //   velocityY *= -1;
  // }

  if (position.y < 0 || position.y > height) {
    velocity.y *= -1;
  }
}
