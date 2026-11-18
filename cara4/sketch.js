function setup() {
  createCanvas(600, 600);//Crea un areade dibuix de 600 píxels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. Setup és la configuració o caraquterístiques del nostre codí
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();}
function draw() {// Draw significa dibuixar
  background(35);//Fons de color gris, és de color gris perqué hi ha un numoro entre 0 i 255 i el 0 es negra i el 255 es blanc.
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 200);
  print(vol);
  print(h)
  strokeWeight(3)
  fill(255,221,3);//fill significa omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer numero és el nivell de vermellos(R:red), el segon numero es el nivell de verdos(G:green) i el tercer numero és el nivell de blavos(B:blue). Podem fer 255 X 255 X 255= 16.700.000 de colors diferents. He de posar el color que  vulguis als ull hi ha la cara canviant els 3 numeros, buscant a google colors RGB
  ellipse(300,300,200,200);//És la cara secera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon numero significa la posicio Y(vertical) del centre de la el·lipse. El tercer numero significa l'amplada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els numeros son pixels contants des de la cantonada superir esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inferior esquerra)
  fill(255+vol,50+h,420+vol,500+h);//És el color del ulls
  ellipse(252,272,50,40);//És l'ull dret perquè és 350 de X al centre
  ellipse(352,272,50,40);//És l'ull esquerra perquè és 250 pixels de la X del centre 
  fill(0)
  ellipse(252,272,20,20)
  fill(0)
  ellipse(352,272,20,20)
  fill(255,0,0);// El color de la cara
  arc(301,350,115,50+h,0,PI)
  fill(255)
   ellipse(252,267,10,10)
  ellipse(352,267,10,10)
  strokeWeight(5)
   noFill();// no omplis de color la cella
  arc(250,260,60,35+h,PI,0);//cella esquerra
   arc(350,260,60,35+h,PI,0);//cella dreta:els dos primers números són la X
   strokeWeight(3)
  // Nariz
  noFill();
  line(300,285,290,325);
  line(300,285,310,325);
  arc(300,325,30,20,0,PI);
  
}
