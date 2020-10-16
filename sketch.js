
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup;
var score=0;

var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(100,520,250,40);
  monkey.addAnimation("monkeyA", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(20,600,600,40);
  ground.velocityX = -5;
  
    bananaGroup=new Group();
  obstcalesGroup=new Group();
  
  
  
  
}


function draw() {
  
background ("white");
  
  textSize(32);
  text("Score:"+score,80,30);
  
  
  score = score+1;
  
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  
  
  if(keyDown("space")){
    monkey.velocityY = -13;
    
  }
  
  monkey.velocityY = monkey.velocityY +1;
  
  
  spawnobstacles();
  banana();
  drawSprites();
}


function banana(){
  if(frameCount%60===0){
     Bananas = createSprite(550,300,300,40);
  Bananas.addImage(bananaImage);
  Bananas.scale = 0.09;
    Bananas.velocityX = -4;
    Bananas.y = Math.round(random(100,300));
  bananaGroup.add(Bananas);
    Bananas.lifetime=137;
  }
 
}

function spawnobstacles(){
  if(frameCount%100===0){
     obstacle = createSprite(550,545,30,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX = -3;
    //time=distance/speed
//550/3
    obstacle.lifetime = 170;

    obstcalesGroup.add(obstacle);
    
  }
  
  
}

