var arrow,arrowGroup,arrowImage;
var redballoon,redGroup,redballoonImage;
var pinkballoon,pinkGroup,pinkballoonImage; 
var blueballoon,blueGroup,blueballoonImage;
var greenballoon6,greenGroup,greenballoonImage;
var sky,skyimage;
var score;
var selectBalloon

function preload(){
 //load your images here 
   redballoonImage = loadImage("red_balloon0.png");
   skyimage = loadImage("background0.png");
   pinkballoonImage = loadImage("pink_balloon0.png");
   blueballoonImage = loadImage("blue_balloon0.png");
   greenballoonImage = loadImage("green_balloon0.png");
   bowImage = loadImage("bow0.png");
   arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  sky = createSprite(0,0,600,600);
  sky.addImage(skyimage);
  sky.scale = 2.5;
 
    
  
  //create a bow sprite
   bow = createSprite(500,230,30,30);
   bow.addImage(bowImage);
  //create arrow sprite
 
  //creating groups
  redGroup = new Group();
  pinkGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  arrowGroup = new Group();
  
  score=0;
   
}
function draw() {
  
  //make bow move up and down y axes
   bow.y = World.mouseY;
  
  //add code here
  
  sky.velocityX = -4;
  if (sky.x<0) {
    sky.x = sky.width / 2
  }    
   
     
     
     if (keyDown("space"))  {
     createArrow();
  }
   
  
  //creating random balloons
    var selectballoon = Math.round(random(1,4));

  
  if (World.frameCount % 100 == 0) {
    if (selectBalloon  == 1) {
      redballoon();
    } else if (selectBalloon  == 2) {
      greenballoon();
    } else if (selectBalloon  == 3) {
      blueballoon();
    } else {
      pinkballoon();
    }
  }
          
      
  
 if (arrowGroup.isTouching(redGroup)) {
  redGroup.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(redGroup)) {
redGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueGroup)) {
blueGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkGroup)) {
  pinkGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  
  drawSprites();
    text("Score: "+ score, 500,50);
}

  //create arrrow for bow
function createArrow (){
 
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
function redballoon (){
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
  
  }
function pinkballoon () {
   var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkballoonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.8;
  pinkGroup.add(pink);
}
function blueballoon () {
   var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}
function greenballoon () {
   var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenballoonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
}