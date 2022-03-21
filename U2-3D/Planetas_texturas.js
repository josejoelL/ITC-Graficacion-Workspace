let img;
let x;
let y;
let z;
function preload (){
    sol =loadImage('assets/sol.jpg');
   tierra =loadImage('assets/luna.jpg');
    venus =loadImage('assets/venus.jpg');
   tierra =loadImage('assets/tierra.jpg');
    textureMode(NORMAL);

x=1;
y=1;
z=0;
}

function setup(){
    createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw(){
//fill es para darle relleno
stroke(255) ;//orillas transparentes
    background(250, 235, 215);
    rotateX(frameCount*0.01);//frame count es el pfs 
    //rotateY(frameCount*0.01);
    rotateZ(frameCount*0.01);
    //frameCount*0.01
    texture(img);
    //sphere(100,40)
    //pop();
    //push();
  torus(264,50);  //un tercer parametro sirve para que no se le miren las aristas
   // traslate(x,y,z);//es para mover el punto origen
    z--
}//theta+=0.1