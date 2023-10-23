function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  // randomSeed(5000);
  ellipse(width / 2 + random(100, 200), height / 2, 50);
  ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
}
