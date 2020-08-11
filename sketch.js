const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var runner;
var barrel;
var backgroundImg;
var ground;

function preload(){
  backgroundImg = loadImage("sprites/meadow.png");
}

function setup() {
  createCanvas(800,400);
  
  ground = createSprite(400,100);

  engine = Engine.create();
  world = engine.world;

  runner = new Runner(400,200,50,50);
  barrel = new Barrel(400,100,50,50);
  plane = new Plane(400,300,50,50);
  lightning = new Lightning(400,350,100,100);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);



  runner.display();
  barrel.display();
  plane.display();
  lightning.display();

}
