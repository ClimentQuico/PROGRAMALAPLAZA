var cont=0;
function setup () {
  // el tamaño es de 192x157 y se ajusta automaticamente
  createCanvas(192, 157,WEBGL);
}

function draw() {
  background(100,20,70);
  cont=cont+0.01;
  rotateX(cont);
  translate(0,0);
sphere(90);
  translate(75, 200);
  fill(180,50,90);
  scale(90);
  rect(30, 70, 50, 50);
}