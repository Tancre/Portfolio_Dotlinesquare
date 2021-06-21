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

  textSize(30);
  text('CLICK TO ERASE!', windowWidth/2-180, windowHeight/2);
  fill(0, 102, 153);
}

function draw(){
	fill(random(255),random(255),random(255),random(100))
	// rectMode(CENTER)
	//rect(mouseX,mouseY,random(200),random(200))

	if (windowWidth > 800){
			ellipse(mouseX,mouseY,random(200),random(200));
	}else {
		ellipse(mouseX,mouseY,random(150),random(150));
	}
}

function mousePressed(){
	clear();
}
