
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var mango1,poly,chaiN,stand1,stand2
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stand1 = new ground(390,300,250,10);
	stand2 = new ground(700,200,200,10);
	ground1 = new block(280,275,30,40);  
  ground2 = new block(310,275,30,40);
  ground3 = new block(340,275,30,40);
  ground4 = new block(370,275,30,40);
  ground5 = new block(400,275,30,40);
  ground6 = new block(430,275,30,40);
  ground7 = new block(460,275,30,40);
  ground8 = new block(490,275,30,40);
  //level two
  ground9 = new block(310,235,30,40);
  ground10 = new block(340,235,30,40);
  ground11 = new block(370,235,30,40);
  ground12 = new block(400,235,30,40);
  ground13 = new block(430,235,30,40);
  ground14 = new block(460,235,30,40);
  //level three
  ground15 = new block(340,195,30,40);
  ground16 = new block(370,195,30,40);
  ground17 = new block(400,195,30,40);
  ground18 = new block(430,195,30,40);
  //level four
  ground19 = new block(370,155,30,40);
  ground20 = new block(400,155,30,40);
  //level five
  ground21 = new block(385,115,30,40);


  blocks1 = new block(640,175,30,40);
  blocks2 = new block(670,175,30,40);
  blocks3 = new block(700,175,30,40);
  blocks4 = new block(730,175,30,40);
  blocks5 = new block(760,175,30,40);
  //level two
  blocks6 = new block(670,135,30,40);
  blocks7 = new block(700,135,30,40);
  blocks8 = new block(730,135,30,40);
  //level three
  blocks9 = new block(700,95,30,40);
	

	poly= new POLYGON(100,100,40,40)
	
	groundObject=new ground(width/2,600,width,20);
chaiN= new CHAIN(poly.body, {x:100 , y:100})
	
	Engine.run(engine);

}

function draw() {

  background(0);
  //Add code for displaying text here!
 
  

  console.log(ground1.body.speed)
poly.display();
chaiN.display();
  groundObject.display();
  stand1.display();
  stand2.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  fill("purple");
  ground9.display();
  ground10.display();
  ground11.display();
  ground12.display();
  ground13.display();
  ground14.display();
  fill("pink");  
  ground15.display();
  ground16.display();
  ground17.display();
  ground18.display();
  fill("orange");  
  ground19.display();
  ground20.display();
  stroke("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  ;
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("clack")
  blocks9.display();
  stroke ("green")
  fill("green")
  ground21.display();
  strokeWeight(2)
  stroke("red")
  textSize(35)
text ("DRAG THE POLYGON WITH YOUR MOUSE AND RELASE TO SHOOt CANS",50,400)
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX , y :mouseY})
}
function mouseReleased(){
	chaiN.detatch();    
	}
  function keyPressed(){
    if(keyCode===32){
        chaiN.attach(poly.body)
    }
}
