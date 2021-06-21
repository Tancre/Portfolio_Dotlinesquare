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
  project2 = select("#project2"); 
  project3 = select("#project3"); 
  project4 = select("#project4"); 
  project5 = select("#project5"); 
  project6 = select("#project6");  
  project7 = select("#project7"); 
  project8 = select("#project8"); 
  project9 = select("#project9"); 

  projectX = select("#projectX"); 
  projectY = select("#projectY"); 

  refresh = select("#refresh");
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
    title.style("color","#fff" );

    project1.style("color","#fff" );
    project3.style("color","#fff" );
    project5.style("color","#fff" );
    project6.style("color","#fff" );
    project7.style("color","#fff" );
    project8.style("color","#fff" );

    projectX.style("color","#fff" );
    projectY.style("color","#fff" );
  } else {
    title.style("color","#000" );

    project1.style("color","#000" );
    project3.style("color","#000" );
    project5.style("color","#000" );
    project6.style("color","#000" );
    project7.style("color","#000" );
    project8.style("color","#000" );

    projectX.style("color","#000" );
    projectY.style("color","#000" );
  }

  if (dimx > 1725) {
    project2.style("color","#fff" );
    refresh.style("filter","invert(100%)");
  } else {
    project2.style("color","#000" );
    refresh.style("filter","invert(0%)");
  }

  if (dimx > 1813) {
    project4.style("color","#fff" );
  } else {
    project4.style("color","#000" );
  }

  if (dimx > 1855) {
    project9.style("color","#fff" );
  } else {
    project9.style("color","#000" );
  }
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
}
