function setup() {
  createCanvas(600, 600);//Crea un areade dibuix de 600 píxels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. Setup és la configuració o caraquterístiques del nostre codí
    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();}
function draw() {// Draw significa dibuixar
   //mouseX=300; mouseY=300;
   let canvigran=random(0,255)
  let canvisuau=noise(0.001*frameCount)*25;
  let canvisuau2=noise(0.001*frameCount+10000)*127;
  let tremolor=random(0,20);
  let tremolorsuau=noise(0,001*frameCount)*10
  background(25, 25, 25, 45);//Fons de color gris, és de color gris perqué hi ha un numoro entre 0 i 255 i el 0 es negra i el 255 es blanc.
   let canvimitja = sin(frameCount*0.06)*15;//Genera numeros del 15 al -15
  let Canvigran = cos(frameCount*0.06)*200;//Genera numeros del 200 al -200
  let canvipetit= cos(frameCount*0.06)*7;
   let canvimoltgran= cos(frameCount*0.06)*250;
    print(mouseX);
  print("mouseX"+mouseX)
   print("mouseY"+mouseY)
   let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 200);
  print(vol);
  print(h)
  strokeWeight(3)
  fill(255+h+tremolor,221+h+Canvigran,3+h+Canvigran);//fill significa omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer numero és el nivell de vermellos(R:red), el segon numero es el nivell de verdos(G:green) i el tercer numero és el nivell de blavos(B:blue). Podem fer 255 X 255 X 255= 16.700.000 de colors diferents. He de posar el color que  vulguis als ull hi ha la cara canviant els 3 numeros, buscant a google colors RGB
  ellipse(mouseX,mouseY,200+tremolor);//És la cara secera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon numero significa la posicio Y(vertical) del centre de la el·lipse. El tercer numero significa l'amplada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els numeros son pixels contants des de la cantonada superir esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquerra)
   fill(255-canvigran);//És el color del ulls
  ellipse(mouseX-48,mouseY-28,50,40+canvimitja);//És l'ull dret perquè és 350 de X al centre
  ellipse(mouseX+52,mouseY-28,50,40+canvimitja);//És l'ull esquerra perquè és 250 pixels de la X del centre 
  fill(0)
  ellipse(mouseX-48,mouseY-28,20,20+canvimitja)
  fill(0)
  ellipse(mouseX+52,mouseY-28,20,20+canvimitja)
  fill(255+h+Canvigran,0+vol+Canvigran,0+vol+Canvigran);// El color de la cara
  arc(mouseX+1,mouseY+50,115,50+h,0,PI)
  fill(255)
   ellipse(mouseX-48,mouseY-33,10,10)
  ellipse(mouseX+52,mouseY-33,10,10)
   noFill();// no omplis de color la cella
  arc(mouseX-50,mouseY-40,60,35+h+Canvigran,PI,0);//cella esquerra
   arc(mouseX+50,mouseY-40,60,35+h+Canvigran,PI,0);//cella dreta:els dos primers números són la X
  // Nariz
  noFill();
line(mouseX,mouseY-25,mouseX-10,mouseY+25);
  line(mouseX,mouseY-25,mouseX+10,mouseY+25);
  arc(mouseX,mouseY+25,30,20,0,PI);
  strokeWeight(6)

 // Pelo blanco en líneas
  strokeWeight(4)
arc(mouseX-60,mouseY-80, 100, 80, PI, TWO_PI);
arc(mouseX-30, mouseY-90, 110, 90, PI, TWO_PI);
arc(mouseX, mouseY-95, 120, 100, PI, TWO_PI);
arc(mouseX+30,mouseY-90, 110, 90, PI, TWO_PI);
arc(mouseX+60,mouseY-80, 100, 80, PI, TWO_PI);

arc(mouseX-70,mouseY-70, 90, 70, PI, TWO_PI );
arc(mouseX-40, mouseY-75, 100, 80, PI, TWO_PI);
arc(mouseX-20,mouseY-80, 100, 80, PI, TWO_PI);
arc(mouseX+20,mouseY-75, 100, 80, PI, TWO_PI);
arc(mouseX+50,mouseY-65, 90, 70, PI, TWO_PI);
  
arc(mouseX-50, mouseY-60, 100, 80, PI, TWO_PI);
arc(mouseX-20,mouseY-80, 110, 90, PI, TWO_PI);
arc(mouseX+10,mouseY-85, 120, 100, PI, TWO_PI);
arc(mouseX+20,mouseY-80, 110, 90, PI, TWO_PI);
arc(mouseX+50,mouseY-70, 100, 80, PI, TWO_PI);



}
