const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 
var engine, world
var score;
score=0

function preload(){

}

function setup(){
createCanvas(800,300)
engine = Engine.create();
world = engine.world;

ground=new Ground(400,height,900,20)
base=new Ground(300,250,200,10)
base2=new Ground(600,200,200,10)

block1=new Box(240,235,30,40)
block2=new Box(270,235,30,40)
block3=new Box(300,235,30,40)
block4=new Box(330,235,30,40)
block5=new Box(360,235,30,40)
block6=new Box(270,195,30,40)
block7=new Box(300,195,30,40)
block8=new Box(330,195,30,40)
block9=new Box(300,155,30,40)

block10=new Box(540,185,30,40)
block11=new Box(570,185,30,40)
block12=new Box(600,185,30,40)
block13=new Box(630,185,30,40)
block14=new Box(660,185,30,40)
block15=new Box(570,145,30,40)
block16=new Box(600,145,30,40)
block17=new Box(630,145,30,40)
block18=new Box(600,105,30,40)
 
polygon=new POLYGON(80,200,40,40)

slingshot=new Slingshot(polygon.body,{x:80,y:200})
Engine.run(engine)
}

function draw(){
background("black")
textSize(30)
fill("white")
text("Score : "+score,600,40)

ground.display()
base.display()
base2.display()

fill("lightblue")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
fill("pink")
block6.display()
block7.display()
block8.display()
fill('lightgreen')
block9.display()

fill("lightblue")
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
fill('pink')
block15.display()
block16.display()
block17.display()
fill("lightgreen")
block18.display()

polygon.display()

slingshot.display()

block1.score();
block2.score()
block3.score()
block4.score()
block5.score()
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();






}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}