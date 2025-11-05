let font;
let fullLorem = "Lorem ipsum dolor sit amet";
let partLorem = "";
let textNum = 0;


function preload(){
    font = loadFont("assets/Jacquard12-Regular.ttf");
}

function setup(){
    createCanvas(600, 200);
    frameRate(5);
}

function draw(){
    background(80, 40, 30);
    typeLorem();
    createText();
}


function typeLorem(){
    if(textNum < fullLorem.length){
        partLorem = partLorem + fullLorem[textNum];
        textNum++;
    }
    else if (textNum === fullLorem.length){
        partLorem = "";
        textNum = 0;
    }
}

function createText(){
    textAlign(CENTER, CENTER);
    fill(220, 160, 90);
    stroke(0);
    strokeWeight(3);
    textSize(40);
    textFont(font);
    text(partLorem, width/2, height/2);
}
