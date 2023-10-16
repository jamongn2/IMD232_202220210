class Attractor {
  constructor(x, y, mass) {
    // this.pos = createVector(x, y);
    // this.vel = createVector(0, 0);
    // this.acc = createVector(0, 0);
    // this.accDisplay = createVector(0, 0);
    // // this.mass = mass;
    // this.radius = this.mass ** 0.7 * 10;
    // this.dragOffset = createVector(0, 0);
    // this.dragging = false;
    // this.hover = false;

    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = 20;
    this.radius = this.mass ** 0.7 * 10;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.hover = false;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    // this.acc.set(0, 0);
    // this.vel.set(0, 0);

    // this.vel.add(this.acc);
    // this.pos.add(this.vel);
    // this.accDisplay.set(this.acc);
    // this.acc.mult(0);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
    // this.acc.set(0, 0);
    // this.vel.set(0, 0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    // const bounce = -0.9;
    // if (this.pos.x < 0 + this.radius) {
    //   this.pos.x -= 0 + this.radius;
    //   this.pos.x *= -1;
    //   this.pos.x += 0 + this.radius;
    //   this.vel.x *= bounce;
    // } else if (this.pos.x > width - 1 - this.radius) {
    //   this.pos.x -= width - 1 - this.radius;
    //   this.pos.x *= -1;
    //   this.pos.x += width - 1 - this.radius;
    //   this.vel.x *= bounce;
    // }
    // if (this.pos.y > height - 1 - this.radius) {
    //   this.pos.y -= height - 1 - this.radius;
    //   this.pos.y *= -1;
    //   this.pos.y += height - 1 - this.radius;
    //   this.vel.y *= bounce;
    // }
    // const bounce = -0.7;
    // if (this.pos.x < 0 + this.radius) {
    //   this.pos.x = 0 + this.radius;
    //   this.vel.x *= bounce;
    // } else if (this.pos.x > width - 1 - this.radius) {
    //   this.pos.x = width - 1 - this.radius;
    //   this.vel.x *= bounce;
    // }
    // if (this.pos.y > height - 1 - this.radius) {
    //   this.pos.y = height - 1 - this.radius;
    //   this.vel.y *= bounce;
    // }

    const bounce = -0.7;
    const slowdownFactor = 0.4;

    if (this.pos.x < 0 + this.radius) {
      this.pos.x = 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x = width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y = height - 1 - this.radius;

      if (this.vel.y < 0) {
        this.vel.y *= slowdownFactor;
      } else {
        this.vel.y *= bounce;
      }
    }
  }

  display() {
    strokeWeight(4);
    stroke(0);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  mouseMoved(mx, my) {
    this.hover =
      (this.pos.x - mx) ** 2 + (this.pos.y - my) ** 2 <= this.radius ** 2;
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.radius) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }

  handlePress(mx, my) {
    this.dragging = false;
    if (!this.hover) return;
    this.dragging = true;
    this.dragOffset.x = this.pos.x - mx;
    this.dragOffset.y = this.pos.y - my;

    // if (this.hover) {
    //   this.dragging = true;
    //   this.dragOffset.set(mx - this.dragOffset.x, my - this.dragOffset.y);
    // }
  }

  // stopDragging() {
  //   this.dragging = false;
  // }

  // handleDrag(mx, my) {
  //   if (!this.dragging) {
  //     this.acc.set(0, 0);
  //     // this.vel.set(0, 0);
  //   }
  //   if (this.dragging) {
  //     this.pos.x = mx + this.dragOffset.x;
  //     this.pos.y = my + this.dragOffset.y;
  //   }
  // }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    } else {
      // this.acc.set(0, 0);
      // this.acc.set(0, 0);
      // this.vel.set(0, 0);
      // this.pos.x = mx;
      // this.pos.y = my;
    }
  }

  mouseReleased() {
    this.dragging = false;
  }
}
