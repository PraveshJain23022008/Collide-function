var Frect,Mrect;

function setup() {
  createCanvas(800,400);
  Frect=createSprite(200,200,50,50);
  Frect.shapeColor="green";
  Frect.debug=true;
 Mrect=createSprite(400, 200, 50, 50);
 Mrect.shapeColor="green";
 Mrect.debug=true;
 
}

function draw() {
  background(0); 
Mrect.x=World.mouseX;
Mrect.y=World.mouseY;


collide();
  drawSprites();
}