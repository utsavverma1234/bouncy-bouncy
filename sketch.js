var fixedRect, movingRect;
var dancingRect,sittingRect;
var meme,idk,ko;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(600,550, 1200, 50);
  fixedRect.shapeColor = "RED";

  movingRect = createSprite(400,200,80,80);
  movingRect.shapeColor = "white";

  dancingRect=createSprite(600,50,1200,50)
  dancingRect.shapeColor = "pink";
  
  sittingRect=createSprite(50,300,50,600)
  sittingRect.shapeColor = "yellow";
  

  meme=createSprite(1150,300,50,600)
 meme.shapeColor = "purple";

 ko=createSprite(940,300,600,600)
ko.shapeColor = "white";


idk=createSprite(585,300,50,600)
idk.shapeColor = "purple";

movingRect.velocityY=4;
movingRect.velocityX=-2;

}

function draw() {
  background(0,0,0);  

if(fall(movingRect,fixedRect)){
  
}
else{
 
}
if (dance(movingRect,dancingRect)){

}
else{

}
if (one(movingRect,sittingRect)){

}
else{

}
if (two(movingRect,meme)){

}
else{

}


  drawSprites();
}
