var pathImg;
var path;
var boyImg;
var boy;
var leftboundary;
var rightboundary;
var edges;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

  //create sprites here
  boy=createSprite(140,380,30,30);
  boy.addAnimation("ishaanboy",boyImg);
  boy.scale=0.08;
 // leftboundary=createSprite
  leftboundary=createSprite(0,0,50,800);
  leftboundary.visible=false;

  rightboundary=createSprite(410,0,50,800);
rightboundary.visible=false;
}


function draw() {
  background(0);
  if(path.y > 400 ){
    path.y = 0 
  }
  boy.x=World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3])
  boy.collide(leftboundary);
  boy.collide(rightboundary);
  
  drawSprites();

}
