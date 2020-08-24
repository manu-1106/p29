const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var base1,block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block13,block14;
var block15,block16,block16;
var base2;
var polygon,sling1;




function setup() {
  createCanvas(800,400);
  //background.shapecolour="black";
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

  base1= new Ground(280,350,90,10);

 
 sling1= new SlingShot(this.polygon,{x:100,y:200});
polygon=new polygon(100,200,)


//mouseReleased();
  //level 4

 block1=new Box(250,340,10,10);
  block2=new Box(260,340,10,10);
  block3=new Box(270,340,10,10);
  block4=new Box(280,340,10,10);
  block5=new Box(290,340,10,10);
  block6=new Box(300,340,10,10);
  block7=new Box(310,340,10,10);

//level3
block8=new Box(260,330,10,10);
block9=new Box(270,330,10,10);
 block10=new Box(280,330,10,10);
block11=new Box(290,330,10,10);
block12=new Box(300,330,10,10);

  //level 2
  block13=new Box(270,320,10,10);
block14=new Box(280,320,10,10);
block15=new Box(290,320,10,10);
//level1
block16=new Box(280,310,10,10);

}
function draw() {
  background(0,0,0); 
  polygon.display(); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  base1.display();
  sling1.display();
 
  
  imageMode(CENTER);
  
  drawSprites();
 
    
      Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});
}     

  
  
  function mouseReleased(){
      sling1.fly();
     
  }