
var movingRect,fixedRect;
var fixedRect2
function setup() {
  createCanvas(800,800);

 movingRect = createSprite(450, 200, 50, 80);
 movingRect.shapeColor="blue";

 fixedRect =  createSprite(263,300,80,50);
 fixedRect.shapeColor="red";

 fixedRect2 = createSprite(457,268,150,50);
fixedRect2.shapeColor="aqua"
}
function draw() {
  background("lightgreen");  
  fixedRect2.x=World.mouseX;
  fixedRect2.y=World.mouseY;

  console.log(movingRect.x-fixedRect2.x);

  if(movingRect.x-fixedRect2.x < fixedRect2.width/2+ movingRect.width/2 &&
     fixedRect2.x-movingRect.x < fixedRect2.width/2+ movingRect.width/2 && 
     fixedRect2.y - movingRect.y < fixedRect2.height/2 + movingRect.height/2 && 
     movingRect.y - fixedRect2.y < fixedRect2.height/2 + movingRect.height/2  )
  {
    movingRect.shapeColor="maroon";
    fixedRect2.shapeColor="maroon";
  }
  else{
    movingRect.shapeColor="pink";
    fixedRect2.shapeColor="pink";
  }
  drawSprites();
}