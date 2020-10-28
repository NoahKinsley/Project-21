var wall, thickness;
var bullet, speed, weight;




function setup() {
  createCanvas(1200,400);
  wall = createSprite(1100,200,thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet = createSprite(50,200,30,30);
  bullet.velocityX = 50;
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    bullet.shapeColor = ("red");
  }
  if(damage<10){
    bullet.shapeColor = ("green");
  }
}

  drawSprites();
}




function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}