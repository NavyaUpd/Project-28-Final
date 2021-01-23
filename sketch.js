
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,stone, rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1000,70,30);
	mango3=new Mango(1100,180,30);
	mango4=new Mango(1000,200,30);
	mango5=new Mango(1200,150,30);


	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone= new Stone(20);
	rope = new Chain(stone.body,{x:240,y:430})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  stone.display();
  rope.display();

  /*console.log(mango1.body.position)
  console.log(mango2.body.position)
  console.log(mango3.body.position)
  console.log(mango4.body.position)
  console.log(mango5.body.position)*/

 detectcollision(stone, mango1);
 detectcollision(stone, mango2);
 detectcollision(stone, mango3);
 detectcollision(stone, mango4);
 detectcollision(stone, mango5);


if (keyWentDown("SPACE")){
	rope.reset();
}
  
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.fly();
}
