class Spring {
  constructor(x, y, length, k) {
    this.pos = createVector(x, y);
    this.restLength = length;
    this.k = k;
  }

  spring(hangingObj) {
    const dist = p5.Vector.dist(hangingObj.pos, this.pos);
    const distDelta = dist - this.restLength;
    const towardBob = p5.Vector.sub(hangingObj.pos, this.pos);
    const force = towardBob.setMag(-1 * this.k * distDelta);
    hangingObj.applyForce(force);
  }

  display(hangingObj) {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    noFill();
    stroke('#00FF00');
    line(this.pos.x, this.pos.y, hangingObj.pos.x, hangingObj.pos.y);
  }
}
