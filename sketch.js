const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  var options1={
    restitution:1
  }
  ball=Bodies.circle(200,100,25,options1);
  World.add(world,ball);
  console.log(ball);
  ground=Bodies.rectangle(200,360,400,20,options);
  World.add(world,ground);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,25)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
}