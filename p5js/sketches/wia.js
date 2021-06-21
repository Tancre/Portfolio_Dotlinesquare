var canvas;
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
 	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-101");
	frameRate(1000);
}

function draw(){
	background(255);

	fill(0);
	textSize(18);
    text('My name is Tancredi Di Giovanni and I am a designer and artist based in Turin, Italy.', mouseX+15, mouseY+35);
    text("I use disciplines such as psychology, philosophy, math & physics, cognitive science and ", mouseX+15, mouseY+60);
    text("art & design with all their relevant brunches to develop projects and make sense of the", mouseX+15, mouseY+85);
    text("world and its processes. ", mouseX+15, mouseY+110);

    text("My objective is to blend science and art together using a multidisciplinary approach based on", mouseX+15, mouseY+160);
    text("critical and logical thought. My instruments are: ", mouseX+15, mouseY+185);

    text("BASIC DESIGN ", mouseX+15, mouseY+235);            
    text("which incorporates the ", mouseX+15, mouseY+260);
    text("theoretical aspect of the science of art.", mouseX+15, mouseY+285);

    text("NEW TECHNOLOGIES", mouseX+450, mouseY+235);            
    text("which allow for innovative experimentation ", mouseX+450, mouseY+260);
    text("and new forms of interactivity.", mouseX+450, mouseY+285);

    fill(0);
    text("What I consider crucial is the idea and practice of free experimentation related to USELESSNESS", mouseX+15, mouseY+335);
    text("in research and education, as it is the best way to affirm creativity and to find new ways of", mouseX+15, mouseY+360);
translate(100,100);
rotate(HALF_PI);
    text("being-in-the-world.", mouseY+260, -mouseX-635);
}


