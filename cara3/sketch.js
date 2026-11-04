function setup() {
  createCanvas(600, 600);//Crea un areade dibuix de 600 píxels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. Setup és la configuració o caraquterístiques del nostre codí
}
function draw() {// Draw significa dibuixar
  //mouseX=300; mouseY=300;
  background(mouseX-265,mouseY,mouseX,152);//Fons de color gris, és de color gris perqué hi ha un numoro entre 0 i 255 i el 0 es negra i el 255 es blanc.
  print(mouseX);
  print("mouseX"+mouseX)
   print("mouseY"+mouseY)
  strokeWeight(3)
  fill(mouseX-45,mouseY-79,mouseX-297),mouseY;//fill significa omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer numero és el nivell de vermellos(R:red), el segon numero es el nivell de verdos(G:green) i el tercer numero és el nivell de blavos(B:blue). Podem fer 255 X 255 X 255= 16.700.000 de colors diferents. He de posar el color que  vulguis als ull hi ha la cara canviant els 3 numeros, buscant a google colors RGB
  ellipse(mouseX,mouseY,200,);//És la cara secera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon numero significa la posicio Y(vertical) del centre de la el·lipse. El tercer numero significa l'amplada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els numeros son pixels contants des de la cantonada superir esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquerra)
  fill(mouseX-45,mouseX,mouseX);//És el color del ulls
  ellipse(mouseX-48,mouseY-28,50,40);//És l'ull dret perquè és 350 de X al centre
  ellipse(mouseX+52,mouseY-28,50,40);//És l'ull esquerra perquè és 250 pixels de la X del centre 
  fill(0)
  ellipse(mouseX-48,mouseY-28,20,20)
  fill(0)
  ellipse(mouseX+52,mouseY-28,20,20)
  fill(mouseX-45,mouseY-300,mouseX-300);// El color de la cara
  arc(mouseX+1,mouseY+50,115,50,0,PI)
  fill(255)
   ellipse(mouseX-48,mouseY-33,10,10)
  ellipse(mouseX+50,mouseY-33,10,10)
   noFill();// no omplis de color la cella
  arc(mouseX+50,mouseY-40,60,35,PI,0);//cella esquerra
 arc(mouseX-50,mouseY-40,60,35,PI,0);//cella dreta:els dos primers números són la X
  // Nariz
  noFill();
  line(mouseX,mouseY-25,mouseX-10,mouseY+25);
  line(mouseX,mouseY-25,mouseX+10,mouseY+25);
  arc(mouseX,mouseY+25,30,20,0,PI);
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
