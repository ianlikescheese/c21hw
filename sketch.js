
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightWall
var leftWall
var ball
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ground = new Ground(width/2, 670, width, 20)
	leftWall = new Ground(600, 600, 20, 120)
	rightWall = new Ground(800, 600, 20, 120)

	ball = Bodies.circle(20,640,10,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	
}


function draw() {
	
  
  background(0);
  
  leftWall.show()
  rightWall.show()
  ground.show()
 
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 10,10)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:8, y:-85})
	}
}


