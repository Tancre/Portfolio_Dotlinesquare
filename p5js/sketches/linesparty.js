var canvas;
var dim;
var a = 50;
var tsize = 10;
var postextx = 30;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
 	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-101");
	frameRate(20);
	colorMode(HSB, 100);

}

function draw(){
	noCursor();
	background(255);
	var posX = mouseX;
	var posY = mouseY;
	var mapx = map(mouseX,0,windowWidth,100,0)
	var mapy = map(mouseY,0,windowHeight,100,20)
	stroke(mapx,mapy,100);
			for (var x = 230; x <= width-100; x += a) {
					for (var y = 10; y <= height; y += a) {
					line(x,y,posX,posY);
				}
			}
	fill(0);
	textSize(12);
    text('CLICK TO CHANGE ', mouseX+postextx-15, mouseY+35);
    text('THE DENSITY', mouseX+postextx, mouseY+ 50);
}

function mousePressed(){
	a = random(8,60);
	postextx = 2000;
}
