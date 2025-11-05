let font1;
let font2;
let fontNum = font1;

function preload(){
    font1 = loadFont("assets/Jacquard12-Regular.ttf");
    font2 = loadFont("assets/CoralPixels-Regular.ttf");
}

function setup(){
    createCanvas(600, 200);
    fontNum = font1;
}

function draw(){
    background(80, 40, 30);
    textAlign(CENTER, CENTER);
    fill(220, 160, 90);
    stroke(0);
    strokeWeight(3);
    textSize(40);
    textFont(fontNum);
    text("Lorem ipsum dolor sit amet", width/2, height/2);
}

function keyPressed(){ 
    if(key === "f" || key === "F"){
        if (fontNum === font1){
            fontNum = font2;
        }
        else if (fontNum === font2){
            fontNum = font1;
        }
    }
}
