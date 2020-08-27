const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box1;
var bird, slingShot;
var bg = "sprites/day.jpg";
var score = 0;
var backgroundImg;

function preload(){
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1  = new Box(810,300,70,70);
    box2 =  new Box(865,325,300,70,70);
    box3 = new Box(810, 350,70,70);
    box4 = new Box(810,350,300,70,70);
    box5 = new Box(759,330,70,70);  
    box6 = new Box(710,395,70,70);
    box7 = new Box(911,390,70,70);
    box8 = new Box(759,370,70,70);
    box9 = new Box(865,390,70,70);
    bird = new Bird(200,200);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
   
    Engine.update(engine);
      

  //  text("const1. "+ score,200,200);
  box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();


    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
  // text("const2. "+ score,300,300);

    bird.display();
    slingshot.display();


    noStroke();
    textSize(35);
    fill("yellow");
    text("score "+score,width-300,50);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attatch(bird.body);
    }
    }
    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);   
        if (hour >= 06 && hour<=19){
            bg = "sprites/day.jpg";
        }
        else{
            bg = "sprites/night.jpg";
        }
        backgroundImg = loadImage(bg);
    }
