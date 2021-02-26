class Game {
    constructor(){

    }

getState(){
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
  }

  update(state){
      database.ref('/').update({
          gameState:state
      })
  }

 async start(){
      if (gameState===0) {
          player=new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if (playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          }
          
          form = new Form();
          form.display();
      }
      car1=createSprite(100,200);
      
      car2=createSprite(300,200);
      
      cars = [car1,car2]

  }

  play(){
      form.hideform();
      Player.getPlayerinfo();
      player.getCarsAtEnd()

      if (allPlayers!==undefined){
          //background()
          //image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
          var index = 0;
          var x = 175;
          var y ;
          for (var plr in allPlayers){
              index = index+1;
              x = x+250;
              y = displayHeight-allPlayers[plr].distance;
              car[index-1].x=xcars[index-1].y=y

              if (index===player.index){
                  stroke(10)
                  fill("red")
                  ellipse(x,y,60,60)
                  camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
              }

              else{
                  fill ("white")
              }

            textAlign(CENTER)
            textSize(20)
            text (allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75)
            }
            drawSprites()
          }

          if (keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10;
            player.update();
                }
            
                if (player.distance>4100){
                    gameState = 2;
                    player.rank = player.rank+1
                    Player.updatecarsAtEnd(player.rank)
                }
            
              }
            
              end() {
                  console.log("game ended");
                  console.log(player.rank)
                  var message = createElement('h2')
                  message.html("congratulations "+player.name+" your rank is "+player.rank)
                  message.position(displayWidth/2-80,displayWidth/10)
            
              

        
        }
  }
  

