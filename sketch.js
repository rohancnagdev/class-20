var fixedrect , movingrect

function setup() {
  createCanvas(800,400);
fixedrect =  createSprite(200, 200,100, 50);
movingrect = createSprite(300,300,50,100);
movingrect.shapeColor = "green"
fixedrect.shapeColor = "green"
movingrect.debug = true;
fixedrect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
  }
else{
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
}
  drawSprites();
}