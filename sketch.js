
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {

	createCanvas(500, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(250,790,500,20);

	for (var k = 0; k <=width; k = k + 80){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}
	
	for (var j = 40; j <= width; j = j + 70 ){
		plinkos.push(new Plinko(j, 75, 10) )
	  }
	  for (var j = 20; j <= width-10; j = j + 70 ){
		  plinkos.push(new Plinko(j, 175, 10) )
	  }
	  for (var j = 40; j <= width -20; j = j + 70 ){
		  plinkos.push(new Plinko(j, 275, 10) )
	  }
	  for (var j = 60; j <= width -30; j = j + 90 ){
		  plinkos.push(new Plinko(j, 375, 10) )
	  }
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(frameCount % 15 === 0){
    particle = new Particle(random(width/2-200, width/2+200), 10, 10);
    particles.push(particle);
  }
  
  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }
    for (var j = 0; j < plinkos.length; j = j + 1 ){
      plinkos[j].display();
   }
 
   for (var j = 0; j < particles.length; j++ ){
    particles[j].display();
}  
  
  ground.display();

  drawSprites();
 
}



