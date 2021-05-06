var Engine = Matter.Engine,
 World = Matter.World,
 Bodies = Matter.Bodies 

var engine, world, box
var ground;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
var ground_opt={isStatic:true}

  
ground = Bodies.rectangle(200,300,400,50, ground_opt)
World.add(world,ground);

var box_option = {restitution:1}

  box = Bodies.rectangle (200,20,50,50, box_option)
  World.add(world, box)
  
console.log(box)
 
}   

function draw() {
  background(0);  
  Engine.update(engine)
 rectMode(CENTER)
 rect(box.position.x, box.position.y, 50,50)
 rect(ground.position.x, ground.position.y, 400,50)
 
 
}  