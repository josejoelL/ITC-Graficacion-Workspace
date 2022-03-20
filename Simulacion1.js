let programa;
function preload (){
  
    programa =loadImage('assets2/si.gif');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    image(programa, 0, 0);
    let c = get(50, 90);
    fill(c);
    noStroke();
    rect(25, 25, 50, 50);
}