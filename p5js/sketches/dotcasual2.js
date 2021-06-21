var spot = {
	x: 100,
	y: 50,
	a:20,
	b:90,
	z: 0,
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-101");

  background(255);
  frameRate(1000);
}

function draw(){
	
	spot.x = random(0,width);
	spot.y = random(0,height);
		spot.a = random(0,width);
	spot.b = random(0,height);
	spot.z = random(1,100);
	
	if (windowWidth > 800){
	fill(0,0,0);
	ellipse(spot.x,spot.y,5,5);
	ellipse(spot.a,spot.y,5,5);
	ellipse(spot.x,spot.b,5,5);
    } else {
    fill(0,0,0);
	ellipse(spot.x,spot.y,3,3);
    }
}

function mousePressed(){
	background(255,255,255);
}
	
