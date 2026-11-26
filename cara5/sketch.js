function setup() {
  createCanvas(600, 600);//Crea un areade dibuix de 600 píxels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. Setup és la configuració o caraquterístiques del nostre codí
}
//Farem canvis aleatoris amb random i canvis suaus amb noise
function draw() {// Draw significa dibuixar
  let canvigran=random(0,255)
  let canvisuau=noise(0.001*frameCount)*25;
  let canvisuau2=noise(0.001*frameCount+10000)*127;
  let tremolor=random(0,20);
  let tremolorsuau=noise(0,001*frameCount)*10
  background(canvisuau2);//Fons de color gris, és de color gris perqué hi ha un numoro entre 0 i 255 i el 0 es negra i el 255 es blanc.
  print(canvisuau)
  strokeWeight(canvisuau)
  fill(255+canvigran,221+canvisuau2,3+canvigran);//fill significa omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer numero és el nivell de vermellos(R:red), el segon numero es el nivell de verdos(G:green) i el tercer numero és el nivell de blavos(B:blue). Podem fer 255 X 255 X 255= 16.700.000 de colors diferents. He de posar el color que  vulguis als ull hi ha la cara canviant els 3 numeros, buscant a google colors RGB
  ellipse(300+tremolor,300,200,200);//És la cara secera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon numero significa la posicio Y(vertical) del centre de la el·lipse. El tercer numero significa l'amplada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els numeros son pixels contants des de la cantonada superir esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquerra)
  fill(255);//És el color del ulls
  ellipse(252+tremolor,272,50,40);//És l'ull dret perquè és 350 de X al centre
  ellipse(352+tremolor,272,50,40);//És l'ull esquerra perquè és 250 pixels de la X del centre 
  fill(0)
  ellipse(252+tremolor,272,20,20)
  fill(0)
  ellipse(352+tremolor,272,20,20)
  fill(255+canvigran,0+canvigran,0+canvigran);// El color de la cara
  arc(301+tremolor,350,115,50,0,PI)
  fill(255)
   ellipse(252+tremolor,267,10,10)
  ellipse(352+tremolor,267,10,10)
   noFill();// no omplis de color la cella
  arc(250+tremolor,260,60,35,PI,0);//cella esquerra
  line(325+tremolor,245,375,245);//cella dreta:els dos primers números són la X
  strokeWeight(6)
arc(240+tremolor,220+tremolor,50,40,0,HALF_PI);
arc(270+tremolor,210+tremolor,110,10,0,HALF_PI);
arc(300+tremolor,205+tremolor,120,30,HALF_PI,0);
arc(330+tremolor,210+tremolor,110,25,HALF_PI,0);
arc(360+tremolor,220+tremolor,50,19,HALF_PI,0);

arc(230+tremolor,235+tremolor,90,30,0,HALF_PI);
arc(260+tremolor,225+tremolor,100,35,0,HALF_PI);
arc(290+tremolor,220+tremolor,100,42,0,HALF_PI);
arc(320+tremolor,225+tremolor,100,27,0,HALF_PI);
arc(350+tremolor,235+tremolor,90,0,HALF_PI,0);
  
arc(250+tremolor,240+tremolor,100,30,HALF_PI,0);
arc(280+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(310+tremolor,215+tremolor,120,30,HALF_PI,0);
arc(320+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(350+tremolor,230+tremolor,100,30,0,HALF_PI);

arc(263+tremolor,240+tremolor,100,30,HALF_PI,0);
arc(269+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(315+tremolor,215+tremolor,120,30,HALF_PI,0);
arc(324+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(337+tremolor,230+tremolor,100,30,0,HALF_PI);

arc(254+tremolor,240+tremolor,100,30,HALF_PI,0);
arc(272+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(324+tremolor,215+tremolor,120,30,HALF_PI,0);
arc(326+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(359+tremolor,230+tremolor,100,30,0,HALF_PI);

arc(292+tremolor,240+tremolor,100,30,HALF_PI,0);
arc(237+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(348+tremolor,215+tremolor,120,30,HALF_PI,0);
arc(367+tremolor,220+tremolor,110,30,0,HALF_PI);
arc(360+tremolor,230+tremolor,100,30,0,HALF_PI);
}
