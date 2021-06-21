var canvas;
var dim;
var a = 50;
var c;
var postextx = 30;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
 	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-101");
	frameRate(1000);
	c = color(random(255),random(255),random(255));
}

function draw(){
	background(255);
	dimx = map(mouseX,200,1736,50,0);
	dimy = map(mouseY,0,height,50,0);

	for (var x = 320; x <= width-120; x += a) {

		for (var y = 12; y <= height; y += a){		

			if(mouseIsPressed) {
				fill(random(255),random(255),random(255));
			}
			else {
				fill(c);
			}
			rectMode(CENTER);
			rect(x,y,dimx,dimy); 				
		}	
	}

	fill(0);
	textSize(12);
    text('KEEP IT PRESSED TO', mouseX+postextx-15, mouseY+35);
    text('PARTY HARD', mouseX+postextx+5, mouseY+ 53);

}

function mousePressed(){
	postextx = 2000;
	c = color(random(255),random(255),random(255));
}