var canvas;
var dimx;

var title;
var project9;
var project8;
var project7;
var project6;
var project5;
var project4;
var project3;
var project2;
var project1;
var separator;
var projectX;
var projectY;
var refresh;

var refresh;
// var whoiam;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-101");

  background(255)
  frameRate(10);

  title = select("#mainTitle");
  project1 = select("#project1"); 
}

function draw(){
	background(255)
  settings();
  effects();
}

function settings(){
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

function effects(){

//     if (windowWidth > 800 && windowWidth < 1540){
//     if (dimx > 1210) { 
//       menu1.style("color","#fff" );
//       menu2.style("color","#fff" );
//       menu3.style("color","#fff" );
//       // menu4.style("color","#fff" );
//       // menu5.style("color","#fff" );
//       menu6.style("color","#fff" );
//       logo.style("color","#fff" );
//       whoiam.style("color","#fff" );
//     } else {
//       menu1.style("color","" );
//       menu2.style("color","" );
//       menu3.style("color","" );
//       // menu4.style("color","" );
//       // menu5.style("color","" );
//       menu6.style("color","" );
//       logo.style("color","" );
//       whoiam.style("color","" );
//     }

//     if (dimx > 1300) { 
//       logo.style("color","#fff" );
//     } else {
//       logo.style("color","" );
//     }

//     if (dimx > 1410) { 
//       whoiam.style("color","#fff" );
//     } else {
//       whoiam.style("color","" );
//     }

//     if (dimx > 1450) { 
//       refresh.style("opacity","0");
//     } else {
//       refresh.style("opacity","1");
//     }
//   } 
//   else {
//      if (dimx > 1620) { 
//       menu1.style("color","#fff" );
//       menu2.style("color","#fff" );
//       menu3.style("color","#fff" );
//       // menu4.style("color","#fff" );
//       // menu5.style("color","#fff" );
//       menu6.style("color","#fff" );
//       logo.style("color","#fff" );
//       whoiam.style("color","#fff" );
//     } else {
//       menu1.style("color","" );
//       menu2.style("color","" );
//       menu3.style("color","" );
//       // menu4.style("color","" );
//       // menu5.style("color","" );
//       menu6.style("color","" );
//       logo.style("color","" );
//       whoiam.style("color","" );
//     }

//     if (dimx > 1750) { 
//       logo.style("color","#fff" );
//     } else {
//       logo.style("color","" );
//     }

//     if (dimx > 1820) { 
//       whoiam.style("color","#fff" );
//     } else {
//       whoiam.style("color","" );
//     }
//     if (dimx > 1850) { 
//       refresh.style("opacity","0");
//     } else {
//       refresh.style("opacity","1");
//     }    

//   } 
}
