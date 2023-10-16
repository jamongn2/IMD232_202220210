let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log('aVariable', aVariable);
  console.log('anArray', anArray);
  console.log('anArray[0]', anArray[0]);
  console.log('anArray[1]', anArray[1]);
  console.log('anArray[2]', anArray[2]);
  console.log('anArray.length', anArray.length);
  console.log('anotherArray', anotherArray);
  console.log('anotherArray.length', anotherArray.length);
  console.log('anotherArray[0]', anotherArray[0]);
  console.log('anotherArray[1]', anotherArray[1]);
  anotherArray.push('어레이에 넣은 첫 데이터');
  console.log('anotherArray[0]', anotherArray[0]);
  anotherArray.push(50);
  console.log('anotherArray[1]', anotherArray[1]);

  background(255);
}
function draw() {}
