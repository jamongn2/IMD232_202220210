const stripeNum = 8;
const stripeNum2 = 8;
let rad;
let angle;
let angleVel;
let x;
let y;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  rad = height * 0.4;
  angle = 0;
  angleVel = (TAU / 360) * 0.5;
}

function draw() {
  x = width / 2;
  y = height / 2;

  background(255);

  noFill();
  stroke(0);
  strokeWeight(1);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      //   fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);

      ellipse(x, y, 80);
    }
  }

  translate(width / 2, height / 2);
  const x1 = rad * cos(angle);
  const y1 = rad * sin(angle);

  fill(127);
  stroke(0);
  strokeWeight(2);
  line(0, 0, x1, y1);
  circle(x1, y1, 48);

  angle += angleVel;
}
