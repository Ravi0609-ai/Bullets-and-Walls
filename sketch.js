var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22, 83)
  bullet = createsprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  speed = random(223, 321)
  weight = random(30, 52)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    
    if(damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage < 10)
    {
      wall.shapecolor = color(0, 255, 0)
    }
  }

}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRigthEdge >= wallLeftEdge)
  {
    return true
  }
  return false;
}
