var moving_rect, fixed_rect
var rect1, rect2



function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 50, 50);
  moving_rect.shapeColor = "red";

  fixed_rect = createSprite(200, 200, 50, 50);
  fixed_rect.shapeColor = "red";

  rect1 = createSprite (100, 100, 50, 50);
  rect1.shapeColor = "red";

  rect2 = createSprite(250, 100, 50, 50);
  rect2.shapeColor = "red";
}

function draw() {
  background(255,255,255);
  


  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

if(isTouching(moving_rect, rect1)){
  moving_rect.shapeColor = "grey";
rect1.shapeColor = "grey";
}
else if(isTouching(moving_rect, fixed_rect)){
  moving_rect.shapeColor = "blue";
  fixed_rect.shapeColor = "blue";
}
else{
  moving_rect.shapeColor = "red";
  rect1.shapeColor = "red";
  fixed_rect.shapeColor = "red";
}
  
drawSprites();

}




