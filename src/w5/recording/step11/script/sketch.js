let angle;
let angleVel;
let amplitude = [100, 100];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angle = createVector(0, TAU / 4);
  angleVel = createVector(periodToAngleVel(120), periodToAngleVel(120));

  background(255);
}

function draw() {
  angle.add(angleVel);

  background(255);

  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
  ellipse(
    width / 2 + sin(angle.x) * amplitude[0],
    height / 2 + sin(angle.y) * amplitude[1],
    5
  );

  //   console.log(sin(angle));
}

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
