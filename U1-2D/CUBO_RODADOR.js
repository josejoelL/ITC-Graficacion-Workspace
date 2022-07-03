let img;

function preload (){
    img =loadImage('assets/Doge.jpg');
    textureMode(NORMAL);
}

function setup(){
    createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw(){
    background(250, 235, 215);
    rotateX(frameCount*0.01);
    rotateY(frameCount*0.01);
    rotateZ(frameCount*0.01);
    texture(img);
    box(264);
}