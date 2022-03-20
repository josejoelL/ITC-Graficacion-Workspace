let imagenFondo;
let imagenJuego;
let imagenInicio;
let imagenPared;
let imagenGameover;
let x=0;
let y=10;
let vy=0;
let marcador=0;
let record=0;
let estado=1;
let wx = [];
let wy = [];
let moneda;
let song;
let gameover;

function preload(){ 
  imagenJuego = loadImage('images/aguilamexicana.png');
  imagenFondo = loadImage('images/imagenRepetitiva.png');
  imagenInicio = loadImage('images/imagenInicio.png');
  imagenPared = loadImage('images/cactus.png');
  imagenGameover = loadImage('images/gameover.png');

  moneda = loadSound('images/moneda.mp3'); 
  song = loadSound('images/MariachiSong.mp3');
  gameover = loadSound('images/gameover.mp3');
}

function setup() {
  // put setup code here
  song.loop();
  createCanvas(1800,800);
  textSize(40);
}

function draw() {
  // put drawing code here
  fill(0);
  image(imagenInicio,width/2,height/2);
  imageMode(CENTER);
  text("Record: "+ record, 40, 70);

  if(estado==0){
  fill(255);
  imageMode(CORNER);
  image(imagenFondo,x,0);
  image(imagenFondo,x+imagenFondo.width,0); 
  x-=6;
  if(x <= -1800) x = 0;
  for (i=0;i<4;i++) {
    imageMode(CENTER);
    image(imagenPared,wx[i],wy[i]-(imagenPared.height/2+100));
    image(imagenPared,wx[i],wy[i]+(imagenPared.height/2+100));
    if(wx[i] < 0){
       wy[i] = random(200,height-200);
       wx[i] = width;
    }
    if (wx[i] == 150){
      moneda.play();
        marcador ++;
        record = max(marcador,record);
    }
    if ((y >= height || y<=-10)){
    estado=2;
    cursor();
  }
  if ((abs(125 - wx[i]) < 25) && (abs(y - wy[i]) > 100)){
    estado=2;
   
  }
   wx[i]-=6;
  }

  fill(0);
  image(imagenJuego,125,y);
  text("Puntaje: "+marcador,40,70);
  y = y + vy;
  vy +=1;
  if (y>=900 || y<=0){
  estado=2;
  }

}

if (estado==2){
  
  fill(0);
  image(imagenGameover,width/2,height/2);
  text("Record: "+ record, 40, 70);
  imageMode(CENTER);
  moneda.stop();
  
  if(mouseIsPressed){
    estado=1;
  }
  if (estado==1){
    fill(0);
    image(imagenInicio,width/2,height/2);
    text("Record: "+ record, 40, 70);
    imageMode(CENTER);
  }
}

}


 function mousePressed(){
  vy = -17;
  if (estado==1) {
    x = 0;
    y = height/2;
    marcador=0;
    estado=0;
    wx[0]=600;
    wy[0]=y;
    wx[1]=1200;
    wy[1]=600;
    wx[2]=1800;
    wy[2]=y;
    noCursor();
      }

 }
 function touchStarted(){
        vy = -17;
  if (estado==1) {
    x = 0;
    y = height/2;
    marcador=0;
    estado=0;
    wx[0]=600;
    wy[0]=y;
    wx[1]=1200;
    wy[1]=600;
    wx[2]=1800;
    wy[2]=y;

      }
}

  function keyPressed(){ 
  vy = -17;
  if (estado == 1){
    x = 0;
    y = height/2;
    marcador = 0;
    estado = 0;
    wx[0]=600;
    wy[0]=y;
    wx[1]=900;
    wy[1]=600;
    wx[2]=1200;
    wy[2]=y;
  }
    }