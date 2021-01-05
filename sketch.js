var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor ="green"
  movingRect.shapeColor ="green"


  movingRect.velocityX=5;

  fixedRect.velocityX=-5;
}

function draw() {
  background(255,255,255);
  //movingRect.x= mouseX;
  //movingRect.y=mouseY;
console.log(movingRect.x-fixedRect.x)
if (movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2  &&
  movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2)
  
{
  fixedRect.shapeColor ="red"
  movingRect.shapeColor ="red"

}
else{
  fixedRect.shapeColor ="green"
  movingRect.shapeColor ="green"
}

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
   { movingRect.velocityX = movingRect.velocityX * (-1); fixedRect.velocityX = 
    fixedRect.velocityX * (-1); }
  
  drawSprites();
}