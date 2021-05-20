class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100, 200)
    car1.addImage(car1Img)
    car2 = createSprite(300, 200)
    car2.addImage(car2Img)
    car3 = createSprite(500, 200)
    car3.addImage(car3Img)
    car4 = createSprite(700, 200)
    car4.addImage(car4Img)

    cars = [car1, car2, car3, car4]


  }

  play() {
    form.hide();
    // textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd()



    if (allPlayers !== undefined) {
      background(ground)
      image(track, 0, -windowHeight * 5, windowWidth, windowHeight * 5)

      var index = 0
      var x = 270;
      var y;

      //var display_position = 130;
      for (var plr in allPlayers) {

        index = index + 1;


        x = x + 200;

        y = displayHeight-950 - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          cars[index - 1].shapeColor = "red"
          camera.position.x = windowWidth / 2
          camera.position.y = cars[index - 1].y;
          stroke(8)
          fill("bright yellow")
          ellipse(x,y,70,70)
        }


        //display_position+=20;
        // textSize(15);
        // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50
      player.update();
    }
    if(player.distance>3700){
      gameState=2
      player.rank += 1;
      Player.updateCarsAtEnd(player.rank)

    }
    drawSprites()
  }

  end(){
  console.log(player.rank)
    //console.log("Game Over");
  }
}
