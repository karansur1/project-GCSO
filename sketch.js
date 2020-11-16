var car, wall
var speed, weight



function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(1000,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = color(255)
  car.velocityX=speed;
  // car.debug = true;
  wall = createSprite(1400,200,40,height/2)
  wall = color(80,80,80);
  // wall.debug=true;

 
}

function draw() {
  background(0,0,0);
  if(car.isTouching(wall))
  {
    car.velocityX=0;
    console.log(car.velocityX);
    
    var deformation=0.5 * weight * speed * speed/22500;
 
    if(deformation>180)
    {
         car.shapeColor = color(255,0,0);
    }
    
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
 
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}


