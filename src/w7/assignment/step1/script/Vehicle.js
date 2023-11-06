class Vehicle {
  // Vehicle클래스는 주어진 매개변수를 사용하여 차량을 나타낸다.
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // constructor가 갖는 매개변수
    this.pos = createVector(x, y);
    // Vehicle의 초기위치를 나타내는 좌표
    this.vel = p5.Vector.random2D();
    // 길이가 1인 무작위 방향의 2차원 벡터이다.차량의 초기속도를 임의로 설정
    this.acc = createVector();
    // acc 벡터생성
    this.mass = mass;
    // 차량의 질량
    this.rad = rad;
    // 차량의 반지름
    this.speedMx = speedMx;
    // 차량의 최대 속도 제한
    this.forceMx = forceMx;
    // 차량에 가해질 수 있는 최대 힘의 크기
    this.neighborhooodRad = 50;
    // 이 차량 주변의 근접 반경을 나타냄
    this.color = color;
    // 차량의 색상을 지정하는 변수
  }

  cohesion(others) {
    let cnt = 0;
    // cnt 변수는 현재 차량 주변에 있는 이웃 차량의 수를 추적한다.
    const steer = createVector(0, 0);
    // steer 벡터는 응집력을 나타내는 조절된 벡터이다
    others.forEach((each) => {
      // others 배열에 있는 각각의 차량에 대해 다음을 수행한다
      if (each !== this) {
        // 자기자신을 제외한 다른차량에 대해서만 조건문 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 현재 차량과 다른 차량 사이의 거리를 계산한다
        if (distSq < this.neighborhooodRad ** 2) {
          // 만약 거리가 neighborhooodRad값보다 작다면, 해당 차량은 현재 차량의 이웃으로 간주된다.
          steer.add(each.pos);
          // 이웃으로 간주된 차량의 위치를 steer벡터에 더해준다
          cnt++;
          // 이웃의 수도 증가시킨다.
        }
      }
    });
    if (cnt > 0) {
      // 만약 이웃의 수가 0보다 크다면,
      steer.div(cnt);
      // steer 벡터를 이웃의 수로 나누어 평균을 구하고
      steer.sub(this.pos);
      // 현재 차량의 위치에서 뺀다.
      steer.setMag(this.speedMx);
      //   최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속도를 뺀다.
      steer.limit(this.forceMx);
      // 힘의 최대값 제한
    }
    return steer;
    // steer벡터를 반환
  }

  align(others) {
    let cnt = 0;
    // cnt 변수는 현재 차량 주변에 있는 이웃 차량의 수를 추적
    const steer = createVector(0, 0);
    // 정렬을 나타내는 조절된 벡터
    others.forEach((each) => {
      // others 배열에 있는 각각의 차량에 대해 다음을 수행
      if (each !== this) {
        // 자기자신을 제외한 다른차량에 대해서만 조건문 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 현재 차량과 다른 차량 사이의 거리를 계산한다
        if (distSq < this.neighborhooodRad ** 2) {
          // 만약 거리가 neighborhooodRad값보다 작다면, 해당 차량은 현재 차량의 이웃으로 간주된다.
          steer.add(each.vel);
          // 이웃으로 간주된 차량의 속도를 steer벡터에 더해준다.
          cnt++;
          // 이웃의 수도 증가시킨다.
        }
      }
    });
    if (cnt > 0) {
      // 만약 이웃의 수가 0보다 크다면,
      steer.div(cnt);
      // steer 벡터를 이웃의 수로 나누어 평균을 구한다.
      steer.setMag(this.speedMx);
      //   최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속도를 뺀다.
      steer.limit(this.forceMx);
      // 힘의 최대값 제한
    }
    return steer;
  }

  separate(others) {
    let cnt = 0;
    // cnt 변수는 현재 차량 주변에 있는 이웃 차량의 수를 추적
    const steer = createVector(0, 0);
    // 정렬을 나타내는 조절된 벡터
    others.forEach((each) => {
      // others 배열에 있는 각각의 차량에 대해 다음을 수행
      if (each !== this) {
        // 자기자신을 제외한 다른차량에 대해서만 조건문 실행
        const dist = this.pos.dist(each.pos);
        // 현재 차량과 각 이웃 차량 사이의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 만약 거리가 0보다 크고, 두 차량의 반지름의 합보다 작다면,
          const distNormal = dist / (this.rad + each.rad);
          // 두 차량 간의 거리를 두 차량의 반지름의 합으로 나누어, 두 차량 사이의 상대적인 가까움을 계산
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 현재 차량에서 이웃 차량을 향하는 방향
          towardMeVec.setMag(1 / distNormal);
          // 벡터를 조정하여 격리힘이 두 차량 사이의 거리에 반비례 하도록 조정
          steer.add(towardMeVec);
          // 격리 벡터에 방향 벡터를 추가
          cnt++;
          // 이웃의 수 증가
        }
      }
    });
    if (cnt > 0) {
      // 만역 cnt가 0보다 크다면,
      steer.div(cnt);
      // 평균을 계산하고
      steer.setMag(this.speedMx);
      // 최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속도를 뺀다.
      steer.limit(this.forceMx);
      // 힘의 최대값으로 제한
    }
    return steer;
    // steer 벡터 반환
  }

  applyForce(force) {
    // 주어진 힘을 차량에 적용
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 힘을 차량의 질량으로 나눈값을 계산
    this.acc.add(forceDivedByMass);
    // 이 힘을 가속도에 추가
  }

  update() {
    // 차량의 위치를 업데이트
    this.vel.add(this.acc);
    // 가속도가 속도에 더해짐
    this.vel.limit(this.speedMx);
    // 최대 속도 제한
    this.pos.add(this.vel);
    // 속도가 위치에 더해짐
    this.acc.mult(0);
    // 가속도 0으로 설정
  }

  borderInfinite() {
    // 차량이 화면 경계를 넘어갈 때 화면의 반대편으로 다시 나타나도록 함
    if (this.pos.x < -infiniteOffset) {
      // 만약 차량이 화면 왼쪽 경계를 넘어가면,
      // infiniteOffset = 화면 경계를 넘어가는 차량이 다시 나타날 위치에서의 오프셋
      this.pos.x = width + infiniteOffset;
      // 차량을 화면의 오른쪽 끝으로 이동시킨다.
    } else if (this.pos.x > width + infiniteOffset) {
      // 또는 차량이 화면 오른쪽 경계를 넘어가면,
      this.pos.x = -infiniteOffset;
      // 차량을 화면의 왼쪽 끝으로 이동시킨다.
    }
    if (this.pos.y < -infiniteOffset) {
      // 만약 차량이 화면 위쪽 경계를 넘어가면,
      this.pos.y = height + infiniteOffset;
      // 차량을 화면의 아래쪽 끝으로 이동시킨다.
    } else if (this.pos.y > height + infiniteOffset) {
      // 또는 만약 차량이 화면 아래쪽 경계를 넘어가면,
      this.pos.y = -infiniteOffset;
      // 차량을 화면의 위쪽 끝으로 이동시킨다.
    }
  }

  display() {
    // 차량을 시각적으로 그림
    push();
    // 현재의 드로잉 스타일 설정과 변형을 저장한다.
    translate(this.pos.x, this.pos.y);
    // 현재 위치로 캔버스의 원점을 이동시킨다.
    rotate(this.vel.heading());
    // 차량의 방향으로 회전한다.
    noStroke();
    // 외곽선을 없앰
    fill(this.color);
    // 차량의 내부를 주어진 색상으로 채운다.
    beginShape();
    // beginShape 와 endShape를 이용해 다각형 모형을 그린다.
    // 차량의 모양을 화살표로 그리기 위함
    vertex(this.rad, 0);
    // 현재 차량의 위치에서 x축으로 this.rad 만큼 이동한 지점을 정점으로 추가한다.
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // 현재 차량의 위치에서 -135도 각도로 이동한 지점을 정점으로 추가한다.
    vertex(0, 0);
    // 현재 차량의 위치를 정점으로 추가
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // 현재 차량의 위치에서 135도 각도로 이동한 지점을 정점으로 추가한다.
    endShape(CLOSE);
    // 다각형을 닫는다.
    pop();
    // 위의 설정들을 복구한다.
  }
}
