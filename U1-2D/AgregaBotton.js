
let button;


function setup() {
  createCanvas(1000, 1000);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(111);
}

function draw() {
  let val = random(255);
  background(0,100,100);

}