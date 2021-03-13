const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bgImg;

function preload() {
bgImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1550,750);
    engine = Engine.create();
    world = engine.world;

    superhero = new Hero(200,200,200,200);
    rope = new Fly(superhero.body,{x:200,y:300});
    base = new Ground(350,600,850,10);
    monster = new Monster(750,500,200,200);

    box1 =new Box(600,565,50,50);
    box2 =new Box(600,515,50,50);
    box3 =new Box(600,465,50,50);
    box4 =new Box(600,415,50,50);
    box5 =new Box(600,365,50,50);
    box6 =new Box(600,315,50,50);
    box7 =new Box(400,565,50,50);
    box8 =new Box(400,515,50,50);
    box9 =new Box(400,465,50,50);
    box10 =new Box(400,415,50,50);
    box11 =new Box(400,365,50,50);
    box12 =new Box(400,315,50,50);
    box13 =new Box(500,565,50,50);
    box14 =new Box(500,515,50,50);
    box15 =new Box(500,465,50,50);
    box16 =new Box(500,415,50,50);
    box17 =new Box(500,365,50,50);
    box18 =new Box(500,315,50,50);
    

}

function draw() {
  background(bgImg);
  Engine.update(engine);

    base.display();
    rope.display();
    superhero.display();
    monster.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();



}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  rope.fly();
}