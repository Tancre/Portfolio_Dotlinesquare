let drops = [];
var canvas;
var postextx = 30;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-101");

  frameRate(20);
  smooth();

}

function draw() {
  background(255);

  for (var i = 0; i < drops.length; i++) {

    drops[i].enlarge();
    drops[i].show();  

	}

  if (mouseIsPressed) { 
         //add new cell by click or by drag *mouseDragged
     let b = new Drop(mouseX,mouseY,1);
     drops.push(b);
     postextx = 3000;
  }

  	fill(0);
	textSize(12);
    text('CLICK, PRESS', mouseX+postextx-15, mouseY+35);
    text('MOVE!', mouseX+postextx+5, mouseY+ 53);
}

class Drop {

  constructor(x,y,dim) {
    this.x = x;
    this.y = y;
    this.dim = dim;
    
  }

  enlarge() {
    //this.x = this.x + random(-5,5);
    //this.y = this.y + random(-5,5);
    this.dim = this.dim + 5;
  }

  show() {

  	//rectMode(CENTER);
    noFill();
    stroke(0);
    ellipse(this.x,this.y,this.dim,this.dim);


    var v = v + 1000;
    if (this.dim > 1800){
    	this.dim = v;
    }
  }

}
