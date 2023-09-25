class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    // force.div(this.mass);
    // 위의 코드는 힘을 받으면 질량에 나눠진다. 그런데 다른 애들도 나눠짐
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
    // 외부에서 더해지는 힘을 다 더해서 계산하는것
    // 위의 코드를 적으면 mult0을 해줘야함
    // 한프레임마다 가속도를 초기화시켜 다시 외부에서 가져와 더해줘야함
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 + this.radius) {
      let delta = this.pos.y - (0 + this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    } else if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
