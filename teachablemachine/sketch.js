
let video;
// let modelURL = 'https://teachablemachine.withgoogle.com/models/[...]'; si lo quisiera hacer con url
let clasificador;
let etiqueta= "";
function preload() {
  // put setup code here
 // clasificador=   ml5.imageClasifier(modeloURL +'model.json'); //por si el url
  clasificador = ml5.imageClassifier('model.json');
}
function setup() {
  // put setup code here
  createCanvas(640, 640);
  video=createCapture(VIDEO);
  video.hide();
  clasificaVideo();
}


function clasificaVideo(){
clasificador.classify(video,gotResults);

}
function draw() {
  background(255);
  // put drawing code here
  image(video,0,100);
  textSize(38);
  textAlign(CENTER, CENTER);
  text("¿Que fruta eras en tu vida pasada?", width / 2, 45 );

  pop();
  textSize(28);
  textAlign(CENTER, CENTER);
  fill(0);
  text(etiqueta,width/2,height-18);
}


function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
 // etiqueta = results[0].label;
 etiqueta = results[0].label == 1 ? `Eras un platano🍌` : "Eras una naranja" + " 🍊";//trucos de javascript

  clasificaVideo();
}
