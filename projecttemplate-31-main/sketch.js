const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rainDrops
/*function preload(){
    
}*/

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    rainDrops = new Rain(5, 5);
}

function draw(){
    background("black");
    Engine.update(engine);
    
    rainDrops.display();   
}   



