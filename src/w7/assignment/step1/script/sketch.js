let traffic;
let infiniteOffset = 80;
// 변수선언
// traffic 변수는 Traffic 클래스의 인스턴스를 저장하는데 사용되고 infiniteOffset 변수는 차량이 화면 경계를 넘어갈 때의 오프셋을 정의한다.

function setup() {
  // setup함수는 스케치가 시작될 때 호출되며 초기화 작업을 수행한다.
  setCanvasContainer('canvas', 3, 2, true);
  // 캔버스를 지정된 요소안에 생성하도록 설정한다. index의 id인 canvas를 가져오고 3:2 비율로 설정한다.true로 비율을 일정하게 한다.
  colorMode(HSL, 360, 100, 100, 100);
  // 색상 모드를 HSL로 설정한다.
  background('white');
  // 백그라운드를 흰색으로 설정
  traffic = new Traffic();
  // Traffic 클래스의 새 인스턴스를 만들어 traffic 변수에 할당한다.
  for (let n = 0; n < 10; n++) {
    // 10번의 반복을 통해 새로운 차량을 생성하여 추가
    traffic.addVehicle(random(width), random(height));
    // addVehicle 메서드를 사용하여 무작위 위치에 차량을 추가한다. random(width) 는 0부터 캔버스의 가로 너비까지의
    // 무작위 좌표를 생성하고, random(height) 는 0부터 캔버스의 세로 높이까지의 무작위 좌표를 생성한다. 이렇게 생성된
    // 무작위 위치에 차량을 추가한다.
  }
}

function draw() {
  // 스케치가 실행되는 동안 계속 호출되며, 화면을 업데이트 한다.
  background('white');
  // 매 프레임마다 백그라운드를 흰색으로 설정한다.
  traffic.run();
  // 차량 시뮬레이션 실행
}

function mouseDragged() {
  // 마우스를 드래그할때 호출되는 함수이다.
  traffic.addVehicle(mouseX, mouseY);
  // 마우스가 드래그될 때마다 현재 마우스 위치에 새 차량을 추가한다.
}
