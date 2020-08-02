
var car, wall, speed, weight;



function setup() {
  createCanvas(1500,150);
  
  speed= random(60,90);
  weight= random(500,1500);

  car=createSprite(50, 80, 10, 50);
  car.shapeColor= "white";

  wall= createSprite(1450,70,20,height/2);
  wall.shapeColor= "brown";

  car.velocityX= speed;
  

  

}

function draw() {

  background("lightblue");  
 
  if (wall.x - car.x < wall.width/2 + car.width/2 && car.x - wall.x < wall.width/2 + car.width/2) {

    car.velocityX=0;
    var deformation= 0.5 * weight * speed * speed/22509;
    if(deformation>100){

    car.shapeColor= "green";
   
    }
    if(deformation>180){

    car.shapeColor= "red";
    
    }
    if(deformation>100 && deformation<180){

      car.shapeColor= "yellow";
      
      }

  }

  drawSprites();

  
}