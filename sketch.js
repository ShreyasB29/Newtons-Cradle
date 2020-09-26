const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,550);
	bob2 = new Bob(350,550);
	bob3 = new Bob(400,550);
	bob4 = new Bob(450,550);
	bob5 = new Bob(500,550);

	roof = new Roof(400,250,350,20);

	chain1 = new Chain(bob1.body,roof.body,-100,0);
	chain2 = new Chain(bob2.body,roof.body,-50,0);
	chain3 = new Chain(bob3.body,roof.body,0,0);
	chain4 = new Chain(bob4.body,roof.body,50,0);
	chain5 = new Chain(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===LEFT_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:0});

	}

	if (keyCode===RIGHT_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:600,y:0});

	}

}