let bodies = [];
let anArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43,
];
let G = 0.1;
// let gravity;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();

  //   for (let i=0; i< anArray.length; a++){
  //     console.log(a)
  //   }
}

function draw() {
  background(255);

  for (let i = 0; i < anArray.length; i++) {
    for (let j = 0; j < anArray.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < anArray.length; i++) {
    // let mass = random(16, 100);
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
