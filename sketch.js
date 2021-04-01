const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  box1 = new Box(200,300,50,50);
  console.log(box1);
box2 = new Box(240,100,50,100);
ground = new Ground(200,390,400,10);
  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  
  console.log(box1.body.angle);
  console.log(box2.body.angle);

  box1.display();
  box2.display();
  ground.display();
  //drawSprites();
}