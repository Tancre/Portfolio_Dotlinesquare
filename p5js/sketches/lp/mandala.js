var canvas;
var dim;
var a = 1;
var s = 1;


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
 	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-101");
	frameRate(20);
	colorMode(HSB, 100);
  var c = color(random(250),random(250),random(250));
}


function draw() {
  background(255);
  noCursor();
//  var c = color(random(250),random(250),random(250));
    for (var x = 0; x <= 1900; x += s) {
      
    angleMode(DEGREES); // Change the mode to DEGREES
    var a = 100;
    translate(1500, -300);
    rotate(a);
    fill(0);
    rect(mouseX-150,x-mouseY,40, 4); // Larger rectangle is rotating in degrees


    }
}




  
