class Traffic {
  // Traffic 클래스 정의
  constructor() {
    this.vehicles = [];
    // vehicles 배열을 초기화한다. 이 배열은 차량 객체들을 저장하는데 사용된다.
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      // 격리행동을 계산하여 separate에 저장한다.
      separate.mult(1.5);
      // 계산된 격리값을 1.5배만큼 증가시킨다.
      eachVehicle.applyForce(separate);
      // 계산된 격리 값을 차량에 적용하여 적절한 힘을 가한다.
      const align = eachVehicle.align(this.vehicles);
      // 정렬 행동을 계산하여 align에 저장한다.
      align.mult(0.5);
      // 계산된 정렬값을 0.5배만큼 증가시킨다.
      eachVehicle.applyForce(align);
      // 계산된 정렬 값을 차량에 적용하여 적절한 힘을 가한다.
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // 응집력 행동을 계산하여 cohesion에 저장한다.
      cohesion.mult(1);
      // 계산된 응집력 값을 1배 만큼 증가시킨다.
      eachVehicle.applyForce(cohesion);
      // 계산된 응집력 값을 차량에 적용하여 적절한 힘을 가한다.
      eachVehicle.update();
      // 차량의 상태를 업데이트 한다.
      eachVehicle.borderInfinite();
      // 차량의 경계조건을 처리한다.
      eachVehicle.display();
      // 차량을 화면에 그린다.
    });
  }
  addVehicle(x, y) {
    // 주어진 위치에 새 차량을 추가한다.
    const mass = floor(random(1, 3));
    // floor 함수 -> 무조건 내림해서 정수로 만들어준다.
    // random(1,3)은 1부터 3사이의 임의의 값을 가진 질량을 생성한다.
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      // 생성된 차량을 vehicles 배열에 추가한다.
      // x,y : 차량의 초기 위치를 나타내는 좌표
      // mass : 차량의 질랭을 나타냄
      // mass *12 : 차량의 반지름을 나타내는 값 (질량에 비례하여 설정됨)
      // 5 : 차량의 최대 속도 제한
      // 0.1 : 차량에 가해질 수 있는 최대 힘의 크기
      // color (random(360),100,40) : 무작위로 생성된 색상을 가진 차량을 만든다.
    );
  }
}
