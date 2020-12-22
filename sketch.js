var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";

  car = createSprite(200,200,30,30);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(1000,200,20,60);
  wall.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "red";
    //car.velocityX = 0;
  }

  bounceOff(car,wall);
  drawSprites();
}

