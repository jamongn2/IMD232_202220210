class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    // this.mass = mass;
    this.mass = random(16, 100);
    // this.radius = this.mass ** (1 / 2) * 4;
    this.radius = map(this.mass, 16, 100, 20, 50);
    // this.velocityVisualization = createVector(0, 0);
    // this.accelerationVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 5, 65);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
    // this.pos.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // this.velocityVisualization.set(this.velocity);
    // this.velocityVisualization.mult(10);

    // this.accelerationVisualization.set(this.acceleration);
    // this.accelerationVisualization.mult(100);

    this.acc.set(0, 0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}
