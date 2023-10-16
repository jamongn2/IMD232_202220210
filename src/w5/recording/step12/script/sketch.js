const dotNum = 30;
const freq = 1 / 2;
let angleStart = 0;
let angleStartVel;
let amp;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angleStartVel = periodToVel(120);
  //   angleStartVel = 0;
  amp = height / 4;

  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < dotNum; a++) {
    const ellipseX = (width / (dotNum - 1)) * a;
    const dia = width / (dotNum - 1);
    const angle = angleStart + (TAU / (dotNum - 1)) * a * freq;
    ellipse(ellipseX, height / 2 + sin(angle) * amp, dia);
  }

  angleStart += angleStartVel;
}

function periodToVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
