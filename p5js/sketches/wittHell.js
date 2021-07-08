var canvas;
let cells = [];
let witt;
var witt2;
var bw;

function preload(){
	witt = loadImage("./assets/media/imgs/witt.png");
 }

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index","-1");
     
	frameRate(20);
	
    if (windowWidth > 800){
		for (let i = 0;i < 20; i++) {        //change the quantity
			let x = random(width);   
			let y = random(height);          //change x,y position each ---> set the x and y of new cell
			cells[i] = new Cell(x,y,70,100);
		}
	} else {
		for (let i = 0;i < 10; i++) {        //change the quantity
			let x = random(width);   
			let y = random(height);          //change x,y position each ---> set the x and y of new cell
			cells[i] = new Cell(x,y,50,71);		
		}
	}
}

function draw() {
	background(0);
  
    textDisappear();

	
	for (var i = 0; i < cells.length; i++) {
		cells[i].move();
		cells[i].show();	
	}
}

function mousePressed() {                            //add new cell by click or by drag *mouseDragged
	if (windowWidth > 800){
        let b = new Cell(mouseX,mouseY,70,100);
        cells.push(b);
    } else {
    	let b = new Cell(mouseX,mouseY,50,71);
        cells.push(b);
    }
}

function textDisappear() {
	    if (cells.length > 20 && windowWidth > 800) {
    	bw = 0;
    } else if (windowWidth < 800) {
    	if (cells.length > 10) {
    		bw = 0;
    	} else {
    		bw = 255;
    	}
    } else {
    	bw = 255;
    }

	fill(bw);
	textSize(12);
    text('CLICK TO ADD A NEW', mouseX+15, mouseY+35);
    text('WITTGENSTEIN', mouseX+30, mouseY+ 53);
    
}

class Cell {

	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show() {
		imageMode(CENTER);
		image(witt,this.x,this.y,this.w,this.h);
		// fill(0);
		// ellipse(this.x,this.y,this.r*2);
	}
}

	

	// clicked(px,py) {
	// 	let d = dist(px,py,this.x,this.y);
	// 	if(d < (this.w && this.h)){
	// 		on = !on;
	// 	}
	// }
