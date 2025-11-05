let y = "Lorem ipsum dolor sit amet";
let myFont;

function preLoad(){
    myFont = loadFont("assets/FiraCode-VariableFont_wght.ttf");
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
    preLoad();
  background(0, 0, 170);
  fill(255);
  textSize(60);
  textFont(myFont);
  textAlign(RIGHT, BOTTOM);
  text(y, 300, 300, 280, 280);
}
