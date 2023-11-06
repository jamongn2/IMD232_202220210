let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  let dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 selector', dom);
  //   console.log('p5 selector', dom.width);
  // select 사용

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('query selector', htmlDom);
  //   console.log('query selector', htmlDom.clientWidth);
  //   querySelector 사용 clientWidth
  // 쿼리셀렉터는 계속 관찰함
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  //   dom = select('#hereGoesMyP5Sketch');
  //   console.log(dom);
  //   console.log('p5 select', dom);
  //   console.log('query selector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
