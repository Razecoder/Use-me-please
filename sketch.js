
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,dustbinImg;
var ground;
var world;
var paper,paperImg,platform;

function preload(){

paperImg = loadImage("paper.png");
dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(800,660,200,200);
	paper=new Paper(200,650,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  dustbin.display();
  paper.display();

  drawSprites();

}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:205,y:-205})
}
}
