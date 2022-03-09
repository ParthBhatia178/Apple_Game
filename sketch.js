var red1,green1,yellow1;
var redImg,greenImg,yellowImg
var score = 0;


function preload()
{
  redImg = loadImage("Assets/Red Apple vector PNG.png")
  yellowImg = loadImage("Assets/Yellow Apple.jpg")
  greenImg = loadImage("Assets/Green Apple.png")
}



function setup() {
  createCanvas(800,400);
  red1 = new RedApples(200,200);
  red2 = new RedApples(50,50);
  red3 = new RedApples(30,30);
}

function draw() {
  background(255,255,255);
  red1.display();
  red2.display();
  red3.display();
  drawSprites();
}