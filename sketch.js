var weira,weiraImg;
var zombie;
var backgroundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var zombie1Img, zombie2Img,zombie3Img,zombie4Img;
var Score =0;


function preload()
{
backgroundImg = loadImage("background.jpg")
weiraImg = loadImage("weira.png");
zombie1Img = loadImage("zombie1.png")
zombie2Img = loadImage("zombie2.png")
zombie3Img = loadImage("zombie3.png")
zombie4Img = loadImage("zombie4.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	weira = createSprite(30,450,10,10);
	weira.addImage(weiraImg);
	weira.scale=0.32
	bg = new Group();
	zg = new Group();
	tg = new Group();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  createZombie();
  if(keyDown("LEFT_ARROW")){
    weira.velocityX=-2;
  }
  if(keyDown("RIGHT_ARROW")){
    weira.velocityX=2;
  }  
  if(keyDown("space")){
    if(zg.isTouching(weira)){
      zg.destroyEach();
      Score = Score+1;
    }
}
	if(Score === 5){
		zombie.velocityX=-1;
	}
	if(Score === 10){
		zombie.velocityX=-2;
	}
	text("Killed Zombies : "+Score,650,50);
  drawSprites();

}

function createZombie(){
	if(frameCount%200 === 0){
	  zombie = createSprite(500,780,100,100);
	  zombie.velocityX=-0.5;
	  zombie.y = Math.round(random(400,480));
	  var randomZombie = Math.round(random(1,4));
	  zombie.scale=0.3;
	  zg.add(zombie);
	  switch(randomZombie){
		case 1:zombie.addImage(zombie1Img);
		break;
		case 2:zombie.addImage(zombie2Img);
		break;
		case 3:zombie.addImage(zombie3Img);
		break;
		case 4:zombie.addImage(zombie4Img);
		break;
		default:break;
	  }
	}
  }

