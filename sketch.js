var gameState = 0;
var playerCount;
var database;
var form,player,game;
var allPlayers;
var car1, car2
var cars;
var c1, c2;
var track, ground;

function preload(){
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database()
  
  game=new Game()
      game.getState()
      game.start()
  
}

function draw () {


if (playerCount===2) {
  game.update(1);
}

if (gameState===1){
  clear()
  game.play()
}

if (gameState===2){
  game.end();
}

}
