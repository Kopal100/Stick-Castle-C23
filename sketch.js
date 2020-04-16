var wall1,wall2,wall3,wall4,wall5
var roof1,roof2,roof3
var wall6;


function setup() {
  createCanvas(700,400);
  wall1 = new Wall(150,300,50,300);
  wall2 = new Wall(190,300,25,250);
 wall3 = new Wall(330,325,250,150)
 wall4 = new Wall(510,300,50,300);
 wall5 = new Wall(470,300,25,250);
wall6 = new Wall(330,70,5,60)
 
}

function draw() {
  background(173,216,230);  

  drawSprites();
  triangle(150,50,140,150,160,150);
  triangle(510,50,500,150,520,150);
  triangle(330,70,220,250,450,250);
  triangle(330,40,330,60,360,50);
 
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
 


}