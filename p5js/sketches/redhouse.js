let t = 'RED HOUSE';
let t2 = '2 Marzo';
let angle = 0;
let hue = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(RGB);
  background(255);
}

function draw() {
  background(255,0,50);
  noStroke();

  textSize(50);
  noStroke();
  let startX = (width - textWidth(t)) / 2;
  let startXX = (width - textWidth(t2)) /2;
  let currentX = startX;
  let currentXX = startXX + 20;
  let a = angle;
  if (frameCount % 5 == 0) {
    hue = (hue + 5) % 360;
  }
  let h = hue;
  
  for (let i = 0; i < t.length; i++) {
    let chr = t.charAt(i);
    let y = height / 2 - 30 + (sin(a) * mouseY);
    fill(0);
    text(chr, currentX, y);
    h += 1;
    currentX += textWidth(chr);
    a += mouseX /200;
  }
  for (let i = 0; i < t2.length; i++) {
    textSize(40);
    let chr = t2.charAt(i);
    let y = height / 2 + 50 + (cos(a) * mouseY);
    fill(0);
    text(chr, currentXX, y);
    h += 1;
    currentXX += textWidth(chr);
    a += mouseX /500;
  }
  
  angle -= 0.05;
}