let imagenFondo;
let imagenJuego;
let imagenInicio;
let imagenPared;
//let cortina;
let x=0;
let y=10;
let vy=0;
let marcador=0;
let record=0;
let estado=1;
let wx=[];
let wy=[];
let miFont;
let r;

function preload(){
    imagenFondo =loadImage('assets/fondo.png');
    imagenInicio =loadImage('assets/fondoInicio.png');
    miFont = loadFont('fonts/joel.otf');
    imagenPared =loadImage('assets/tubo.gif');
  
  imagenJuego = loadImage('assets/icon.gif');
  imagenJuego1 = loadImage('assets/icon1.gif');
  imagenJuego2 = loadImage('assets/icon2.gif');
  imagenJuego3 = loadImage('assets/icon3.gif');
  imagenJuego4 = loadImage('assets/icon4.gif');
  imagenJuego5 = loadImage('assets/icon5.gif');
  imagenJuego6 = loadImage('assets/icon6.gif');
  imagenJuego7 = loadImage('assets/icon7.gif');
  imagenJuego8 = loadImage('assets/icon8.gif');
  imagenJuego9 = loadImage('assets/icon9.gif');
  imagenJuego10 = loadImage('assets/icon10.gif');
  imagenJuego11 = loadImage('assets/icon11.gif');
 
  
}

function setup() {
createCanvas(600,800);
 textFont(miFont);
textSize(40);
  
}
  
  function draw() {
    
    if (estado==0){

    
        fill(255);
        imageMode(CORNER);
      image (imagenFondo,x,0);
      image (imagenFondo,x+imagenFondo.width,0);
      x -=6;

    

   if ( x <= -1800 ) x=0;

      for(i=0;i<2;i++){
        imageMode(CENTER);
        image(imagenPared,wx[i],wy[i]-(imagenPared.height/2+100));
        image(imagenPared,wx[i],wy[i]+(imagenPared.height/2+100));
        if(wx[i]<0){
          wy[i]=random(200,height-200);
          wx[i]=width;
        }
        if(wx[i]==150){
 
          marcador++;
          record = max(marcador,record);
        }
        
      if( y>=height || y<=-10 ){
        estado=1;
        cursor();
      }
      if((abs(150-wx[i])<55)&&(abs(y-wy[i])>100)){
        estado=1;
      }
        wx[i]-=6;
      }
     let r=random(10)+1
     text(r,1,680);
      if(record==0)
       image(imagenJuego, width / 2, y);
      if (record ==1)
        image(imagenJuego1, width / 2, y);
      if (record == 2)
        image(imagenJuego2, width / 2, y);
      if (record == 3)
        image(imagenJuego3, width / 2, y);
      if (record == 4)
        image(imagenJuego4, width / 2, y);
      if (record == 5)
        image(imagenJuego5, width / 2, y);
      if (record == 6)
        image(imagenJuego6, width / 2, y);
      if (record == 7)
        image(imagenJuego7, width / 2, y);
      if (record == 8)
        image(imagenJuego8, width / 2, y);
      if (record == 9)
        image(imagenJuego9, width / 2, y);
      if (record ==10)
        image(imagenJuego10, width / 2, y);

    text("Puntaje: "+marcador,width/2-40,70);
        
        y+=vy;
          vy +=1;


    }else {
      fill(255);
      imageMode(CENTER);
      image(imagenInicio,width/2,height/2);
      text("Record : "+record,350,width/0.85);
    }
  }

  
  
function touchStarted(){
  vy = -14.3;
  if ( estado==1){
        x=0;
        y=height/2;
        marcador=0;
        estado=0;
        wx[0]=600;
        wy[0]=y;
        w[1]=900;
        xy[1]=600;
       

  }

  }

