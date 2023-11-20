let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  // createVector처럼 사용
  //   cam.size(320, 480);
  cam.hide();
  console.log(cam);
  //   noLoop();
}

function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  loadPixels();
  //   cam.loadPixels();
  //   //   loadPixels를 해줘야 픽셀을 남겨둠
  //   //   괄호 (캠을 가져옴, 화면크기, 화면 비율)
  //   console.log('width', cam.width);
  //   console.log('height', cam.height);
  //   console.log('pixel', cam.pixels[0]);
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      const idx = cam.width * y + x;
      const color = cam.pixels[idx];
      const b = brightness(color);
      ellipse(x, y, (b / 255) * 20);
      // const red = red(color);
    }
  }
  updatePixels();
}
