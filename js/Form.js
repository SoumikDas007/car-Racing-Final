class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset=createButton("update")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2-50,0);

    this.input.position(windowWidth/2-50, windowHeight/2-80);
    this.button.position(windowWidth/2-50,windowHeight/2);
    this.reset.position(windowWidth-100,20)
     
     this.reset.mousePressed(()=>{
       player.updateCount(0)
       game.update(0)
     })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

  }
}
