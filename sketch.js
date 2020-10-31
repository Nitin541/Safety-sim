var selector,car,wall,name,randNum,CON,kineticEnergy,weight,deformation,defDeg;

function setup(){
  createCanvas(1800,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,200);

  randNum = Math.round(random(1,6));

  CON = 22500;

  selector = Math.round(random(25,100));
  weight = Math.round(random(1000,2000));

  car.velocityX = selector;
}

function draw(){
  background(0);

kineticEnergy = 0.5 * weight * selector * selector;
deformation = Math.round(kineticEnergy /CON);

if(wall.x - car.x <= wall.width/2 + car.width/2){
  if(deformation <= 80){
    car.shapeColor = color(0,255,0);
  }if(deformation > 80 && deformation <= 180){
    car.shapeColor = color(230,230,0);
  }if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }
  textSize(20);
  text('Deformation level is: ' + deformation,20,320);
}  


  car.collide(wall);
  
  if(randNum === 1){
    name = 'Tesla Model X';
  }if(randNum === 2){
    name = 'Cybertruck';
  }if(randNum === 3){
    name = 'Roadster';
  }if(randNum === 4){
    name = 'Cyclops';
  }if(randNum === 5){
    name = 'Alpha driver';
  }if(randNum === 6){
    name = 'Utopia';
  }
  textSize(20);
  text('Running deformation simulation on '+name+' for mass = '+weight+' kg and speed = '+selector+' km/h',20,80);

  drawSprites();
}
