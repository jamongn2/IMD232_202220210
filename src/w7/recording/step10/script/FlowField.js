class Flowfield {
  constructor(resolution, noiseVel) {
    this.resolution = resolution;
    this.columnNum = ceil(width / this.resolution);
    this.rowNum = ceil(height / this.resolution);
    this.field = new Array(this.columnNum);
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      this.field[colIdx] = new Array(this.rowNum);
    }
    // this.field = [this.columnNum][this.rowNum];
    // field의 열, 행
    this.noiseVel = noiseVel;
    this.init();
  }
  init() {
    noiseSeed(random(1000));
    let noiseX = 0;
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      let noiseY = 0;
      for (let rowIdx = 0; rowIdx < this.rowNum; this.rowIdx++) {
        // const angle = map (noise(noiseX, noiseY),0,1,0,TAU);
        // const vector = createVector(1,0);
        // vector.rotate(angle);
        // this.field[colIdx][rowIdx]= vector;
        // 위의 네줄을 아래 두줄로 가능
        const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        noiseY += this.noiseYVel;
      }
      noiseX += this.noiseVel;
    }
  }

  display() {
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        const s = this.resolution;
        const x = s * colIdx + s * 0.5;
        const y = s * rowIdx + s * 0.5;
        const angle = vector.heading();
        push();
        translate(x, y);
        rotate(angle);
        line(-this.resolution * 0.4, 0, this.resolution * 0.4, 0);
        pop();
      }
    }
  }

  lookup(pos) {
    // constrain = 어떤 일정 숫자 범위안에서 제한을 한다.
    const colIdx = constrain(ceil(pos.x / this.resolution), 0, this.rowNum - 1);
    return field[colIdx][rowIdx];
  }
}
