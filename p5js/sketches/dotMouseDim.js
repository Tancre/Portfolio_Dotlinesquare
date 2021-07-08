var canvas;
var dimx;

var title;
var project9;
var project8;
var project7;
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
var whoiam;

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
  project2 = select("#project2"); 
  project3 = select("#project3"); 
  project4 = select("#project4"); 
  project5 = select("#project5"); 
  project7 = select("#project7"); 
  project8 = select("#project8"); 
  project9 = select("#project9"); 

  projectX = select("#projectX"); 
  projectY = select("#projectY"); 

  refresh = select("#refresh");
  whoiam = select("#whoiam");
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
  console.log(dimx);

  if (dimx > 1600) { 
    title.style("filter","invert(100%)");

    project1.style("filter","invert(100%)");
    project3.style("filter","invert(100%)");
    project5.style("filter","invert(100%)");
    project7.style("filter","invert(100%)");
    project8.style("filter","invert(100%)");

    projectX.style("filter","invert(100%)");
    projectY.style("filter","invert(100%)");
  } else {
    title.style("filter","invert(0%)");

    project1.style("filter","invert(0%)");
    project3.style("filter","invert(0%)");
    project5.style("filter","invert(0%)");
    project7.style("filter","invert(0%)");
    project8.style("filter","invert(0%)");

    projectX.style("filter","invert(0%)");
    projectY.style("filter","invert(0%)");
  }

  if (dimx > 1725) {
    project2.style("filter","invert(100%)");
    refresh.style("filter","invert(100%)");
  } else {
    project2.style("filter","invert(0%)");
    refresh.style("filter","invert(0%)");
  }

  if (dimx > 1813) {
    project4.style("filter","invert(100%)");
  } else {
    project4.style("filter","invert(0%)");
  }

  if (dimx > 1821) {
    whoiam.style("color","rgb(255,255,255)");
  } else {
    whoiam.style("color","");
  }

  if (dimx > 1855) {
    project9.style("filter","invert(100%)"); 
  } else {
    project9.style("filter","invert(0%)");
  }
//       menu1.style("filter","invert(100%)");
//       menu2.style("filter","invert(100%)");
//       menu3.style("filter","invert(100%)");
//       // menu4.style("filter","invert(100%)");
//       // menu5.style("filter","invert(100%)");
//       menu6.style("filter","invert(100%)");
//       logo.style("filter","invert(100%)");
//       whoiam.style("filter","invert(100%)");
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
//       logo.style("filter","invert(100%)");
//     } else {
//       logo.style("color","" );
//     }

//     if (dimx > 1410) { 
//       whoiam.style("filter","invert(100%)");
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
//       menu1.style("filter","invert(100%)");
//       menu2.style("filter","invert(100%)");
//       menu3.style("filter","invert(100%)");
//       // menu4.style("filter","invert(100%)");
//       // menu5.style("filter","invert(100%)");
//       menu6.style("filter","invert(100%)");
//       logo.style("filter","invert(100%)");
//       whoiam.style("filter","invert(100%)");
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
//       logo.style("filter","invert(100%)");
//     } else {
//       logo.style("color","" );
//     }

//     if (dimx > 1820) { 
//       whoiam.style("filter","invert(100%)");
//     } else {
//       whoiam.style("color","" );
//     }
//     if (dimx > 1850) { 
//       refresh.style("opacity","0");
//     } else {
//       refresh.style("opacity","1");
//     }    
}
function onTop() {
  whoiam.style('color', 'red');
}
 
function outside() {
  whoiam.style('color', 'white');
}