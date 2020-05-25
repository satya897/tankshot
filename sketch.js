// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
//const {Engine} = Matter 
//is the same as const Engine = Matter.Engine

var ground,tanker;
//var shootingball,bubbleball

function setup() {
 var canvas = createCanvas(2000,4000);
     // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   // var canvas = createCanvas(1200,4000,1200,4000);
    engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(600,700);
    
}

function draw() {

    // Remember to update the Matter Engine and set the background.
    background(255,255,255);
    Engine.update(engine);

   tanker.display();

    }


//function keyReleased() {
    // Call the shoot method for the cannon.
//}