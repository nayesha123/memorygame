var backgroundimage, cardLogo, CherryCard, CherryCard2 , CherryImage, RainbowCard, RainbowCard2;
var RainbowImage, GuitarCard, GuitarCard2, GuitarImage ;
var musicImage, parisImage, pawImage, shoeImage, strawberryImage, musicCard, parisCard, pawCard, shoeCard, strawberryCard;
var MusicCard2, parisCard2, pawCard2, shoecard2, Strawberrycard2;
function preload(){
CherryImage = loadImage('images/cherry.png');
RainbowImage =loadImage('images/rainbow.jpg');
musicImage = loadImage('images/musicNote.jpg');
cardLogo = loadImage('images/card logo.png');
GuitarImage = loadImage('images/guitar.jpg');
parisImage =loadImage('images/paris card.jpg');
pawImage = loadImage('images/paw-print.jpg');
shoeImage= loadImage('images/pointe shoes.jpg');
strawberryImage = loadImage('images/strawberry.png');
}


function setup(){
createCanvas(600,600);

CherryCard = createSprite(120,120,75,75);
RainbowCard = createSprite(480,120,75,75);
RainbowCard2 = createSprite(240,120,75,75);
MusicCard2 = createSprite(360,120,75,75);
shoeCard = createSprite(120,480,75,75);
musicCard = createSprite(480,480,75,75);
pawCard = createSprite(240,480,75,75);
Strawberrycard2 = createSprite(360,480,75,75);
GuitarCard2 = createSprite(120,240,75,75);
shoecard2 = createSprite(480,240,75,75);
parisCard2 = createSprite(240,240,75,75);
strawberryCard = createSprite(360,240,75,75);
GuitarCard = createSprite(120,360,75,75);
CherryCard2 = createSprite(480,360,75,75);
parisCard = createSprite(240,360,75,75);
pawCard2 = createSprite(360,360,75,75);


CherryCard.addImage("cherrylogo", CherryImage);
CherryCard.addImage('cherry',cardLogo);
CherryCard.scale = 0.4;

RainbowCard.addImage('Rainbow',cardLogo);
RainbowCard.addImage('Rainbow1',RainbowImage);
RainbowCard.scale = 0.4;

}

function draw(){
    background("lavender");

    
    RainbowCard2.addImage('Rainbow2',cardLogo);
    RainbowCard2.scale = 0.4;
    MusicCard2.addImage('music',cardLogo);
    MusicCard2.scale = 0.4;
    shoeCard.addImage("shoe",cardLogo);
    shoeCard.scale = 0.4;
    musicCard.addImage("music", cardLogo);
    musicCard.scale = 0.4;
    pawCard.addImage("paw",cardLogo);
    pawCard.scale = 0.4;
    Strawberrycard2.addImage("strawberry", cardLogo);
    Strawberrycard2.scale = 0.4;
    GuitarCard2.addImage("guitar2", cardLogo);
    GuitarCard2.scale = 0.4;
    shoecard2.addImage("shoe2", cardLogo);
    shoecard2.scale = 0.4;
    parisCard2.addImage("paris2",cardLogo);
    parisCard2.scale = 0.4;
    strawberryCard.addImage("strawberry", cardLogo);
    strawberryCard.scale = 0.4;
   GuitarCard.addImage("guitar", cardLogo);
    GuitarCard.scale = 0.4;
    CherryCard2.addImage("cherry2", cardLogo);
    CherryCard2.scale = 0.4;
    parisCard.addImage("paris", cardLogo);
    parisCard.scale = 0.4;
    pawCard2.addImage("paw2",cardLogo);
    pawCard2.scale = 0.4;
    

    if(mouseIsOver(CherryCard)){
        setTimeout(CherryCard.changeImage( "cherrylogo",CherryImage),2000);  
    }
    else{
       
        //setTimeout(alert("hi"), 1000)
       setTimeout(CherryCard.changeImage("cherry", cardLogo),2000); 
       
    }
    
    if(mousePressedOver(RainbowCard)){
        RainbowCard.changeImage( "Rainbow1",RainbowImage);
        RainbowCard.scale =0.1;
    }
    else{
        RainbowCard.changeImage("Rainbow",cardLogo );
        RainbowCard.scale = 0.4
    }
    if(mousePressedOver(RainbowCard2)){
        RainbowCard2.addImage(RainbowImage) 
        RainbowCard2.scale = 0.1 
    } 
    
    
    text(mouseX + ", " + mouseY, mouseX, mouseY);
    drawSprites();
}