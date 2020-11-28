
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(50,580);
  
monkey.addAnimation("running",monkey_running);
  
  monkey.scale=0.2;
  
  ground = createSprite(300,580,600,20);

  
  bananaGroup = createGroup();
  
  obstacleGroup = createGroup();
}


function draw() {
background("green");
  
  console.log(monkey.y);
  
  if(keyDown("space") && monkey.y >= 508) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  spawnBananas();
 
  spawnObstacle();
  
   if(bananaGroup.isTouching(monkey)){
        //gameState = END;
     bananaGroup.destroyEach();
    }
  
  drawSprites();
 
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+survivalTime,100,50);
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,400));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,555,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}

