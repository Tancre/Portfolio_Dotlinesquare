var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  
  var canvas;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");

  frameRate(100)

}

function draw(){
  background(255);
if (windowWidth > 800 && windowWidth < 1540){
    dimx = map(mouseX, 0, windowWidth, 0,1800);
    fill(0,0,0);
    ellipse(windowWidth/2, windowHeight/2, dimx,dimx); 
  } else if (windowWidth > 1540){
    dimx = map(mouseX, 0, windowWidth, 0,2300);
    fill(0,0,0);
    ellipse(windowWidth/2, windowHeight/2, dimx,dimx); 
  } else {
    dimx = map(mouseX, 0, 500, 0,1060);
    fill(0,0,0);
    ellipse(windowWidth/2, windowHeight/2+30, dimx,dimx); 
  }
}
