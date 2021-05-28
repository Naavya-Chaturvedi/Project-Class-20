var bg,bgImg;
var cat,catMoving,catImg,catHappy;
var mouse,mouseImg,mouseMoving,mouseHappy;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catMoving = loadAnimation("images/cat2.png","images/cat3.png");
    catHappy = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse4.png");
    mouseMoving = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseHappy = loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here

      cat = createSprite(450,300,20,20);
      cat.addAnimation("c",catImg);
      cat.scale = 0.1;

      mouse = createSprite(100,300,10,10);
      mouse.addAnimation("m",mouseImg);
      mouse.scale=0.1;
    }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x<(cat.width-mouse.width)/2 +100){
           mouse.addAnimation("happym",mouseHappy);
           mouse.changeAnimation("happym");

           cat.addAnimation("Happyc",catHappy);
           cat.changeAnimation("Happyc");
           cat.velocityX=0;
     }

    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouse",mouseMoving);
       mouse.changeAnimation("mouse");
       mouse.frameDelay = 25;

       cat.velocityX = -2;
       cat.addAnimation("cm",catMoving);
       cat.changeAnimation("cm");
   }

}
