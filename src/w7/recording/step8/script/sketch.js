const tileSize = 40;
let columnNum;
let rowNum;
let noiseCoordMult = 0.1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  columnNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);

  noiseSeed(5);
}

function draw() {
  // randomSeed(100);
  background(255);
  noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      // fill(random() * 255);
      fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255);
      rect(column * tileSize, row * tileSize, tileSize);
    }
  }
}
