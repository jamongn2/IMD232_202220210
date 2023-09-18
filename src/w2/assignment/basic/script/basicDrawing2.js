function setup() {
  setCanvasContainer('p5-canvas2', 2, 2, true);
  background('cornflowerblue');
}

function draw() {
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  //   배경
  fill(255, 230, 150);
  rect(0, 750, 1000, 1000);

  stroke(51);
  strokeWeight(1);
  fill(165, 120, 50);
  rect(500, 50, 230, 260);
  rect(720, 50, 230, 260);

  fill(135, 206, 235);
  rect(515, 65, 190, 230);
  rect(735, 65, 190, 230);

  stroke(0);
  strokeWeight(0);
  fill(255);
  ellipse(540, 110, 50, 25);
  rect(515, 100, 25, 50);
  ellipse(540, 150, 50, 60);
  rect(515, 150, 30, 70);
  ellipse(550, 170, 50, 40);
  rect(515, 180, 30, 70);
  ellipse(580, 180, 50, 40);
  ellipse(560, 210, 80, 60);
  ellipse(580, 260, 140, 75);

  stroke(0);
  strokeWeight(0);
  fill(255);
  ellipse(880, 200, 75, 35);
  ellipse(840, 210, 50, 25);
  rect(890, 200, 35, 90);
  ellipse(870, 220, 50, 25);
  ellipse(880, 240, 75, 35);
  ellipse(820, 230, 65, 25);
  ellipse(873, 270, 65, 25);

  stroke(0);
  strokeWeight(0);
  fill(250, 255, 230, 170);
  rect(750, 30, 180, 300);
  stroke(250, 255, 230, 170);
  strokeWeight(20);
  line(780, 50, 780, 310);
  line(820, 50, 820, 310);
  line(860, 50, 860, 310);
  line(900, 50, 900, 310);

  stroke('black');
  strokeWeight(10);
  line(460, 30, 950, 30);

  stroke(53);
  strokeWeight(20);
  point(500, 30);
  point(550, 30);
  point(600, 30);
  point(650, 30);
  point(700, 30);
  point(750, 30);
  point(800, 30);
  point(850, 30);
  point(900, 30);

  //   컴퓨터
  stroke(51);
  strokeWeight(1);
  fill(255, 255, 255);
  rect(300, 250, 300, 200, 10);
  fill(51);
  rect(310, 260, 280, 150);

  fill(128, 128, 128);
  beginShape();
  vertex(420, 450);
  vertex(480, 450);
  vertex(520, 500);
  vertex(380, 500);
  endShape();

  //   선인장
  fill('rgba(0,255,0,0.25)');
  ellipse(200, 450, 40, 60);

  //   화분
  fill(255);
  beginShape();
  vertex(170, 450);
  vertex(230, 450);
  vertex(215, 500);
  vertex(185, 500);
  endShape();

  stroke(0);
  strokeWeight(0);
  fill(245, 245, 190);
  rect(800, 400, 8, 200);

  stroke(51);
  strokeWeight(0);
  fill(110, 128, 128);
  beginShape();
  vertex(730, 600);
  vertex(880, 600);
  vertex(850, 760);
  vertex(760, 760);
  endShape();

  //   책상
  stroke('brown');
  strokeWeight(10);
  line(150, 500, 750, 500);

  line(250, 500, 200, 780);
  line(700, 780, 650, 500);
  line(350, 780, 300, 500);
  line(600, 500, 550, 780);

  stroke('salmon');
  strokeWeight(20);
  line(480, 600, 480, 800);
  line(620, 600, 620, 800);

  stroke(220, 128, 114);
  strokeWeight(15);
  line(510, 600, 510, 780);
  line(590, 600, 590, 780);

  stroke(1);
  strokeWeight(1);
  fill(245, 245, 190);
  ellipse(550, 630, 230, 90);
  fill(255, 255, 230);
  ellipse(550, 560, 180, 230);

  stroke(245, 245, 190);
  strokeWeight(3);
  line(800, 500, 770, 450);
  line(810, 580, 840, 550);

  strokeWeight(10);
  rect(50, 70, 140, 160);
  strokeWeight(0);
  fill(245, 225, 190);
  rect(180, 250, 80, 100);
}
