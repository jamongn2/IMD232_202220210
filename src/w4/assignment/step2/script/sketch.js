let attractor;
let gravity;
// let wind;
let mVec;
let pMVec;
let showVector = false;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  // mover = new Mover(300, 50, 2);
  attractor = new Attractor();
  gravity = createVector(0, 0.5);
  // wind = createVector(0.2, 0);
  mVec = createVector();
  pMVec = createVector();
}

function draw() {
  const force = p5.Vector.mult(gravity, attractor.mass);
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(attractor.mass);
  attractor.applyForce(gravityA);
  if (attractor.contactEdge()) {
    let c = 0.01;
    let friction = attractor.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    attractor.applyForce(friction);
  }

  attractor.update();
  attractor.checkEdges();
  attractor.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  attractor.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  let mouseMovement = p5.Vector.sub(mVec, pMVec);
  let mouseSpeed = mouseMovement.mag();

  let maxDistance = 50;
  let distance = dist(pMVec.x, pMVec.y, mVec.x, mVec.y);
  if (distance > maxDistance) {
    mouseSpeed = maxDistance * 0.9;
  }

  let throwingForce = createVector(mouseMovement.x, mouseMovement.y);
  throwingForce.mult(mouseSpeed * 0.1);

  attractor.applyForce(throwingForce);

  // if (!isMouseInsideCanvas()) return;
  // pMVec.set(pmouseX, pmouseY);
  // mVec.set(mouseX, mouseY);

  // let mouseMovement = p5.Vector.sub(mVec, pMVec);
  // let throwingForce = createVector(mouseMovement.x, mouseMovement.y);

  // let distance = dist(pMVec.x, pMVec.y, mVec.x, mVec.y);
  // let maxDistance = 400;
  // let normalizedDistance = constrain(distance, 0, maxDistance) / maxDistance;

  // throwingForce.mult(normalizedDistance * 5);
  // attractor.applyForce(throwingForce);
}

// function keyPressed() {
//   if (key === 's' || key === 'S') {
//     showVector = !showVector;
//   }
// }
