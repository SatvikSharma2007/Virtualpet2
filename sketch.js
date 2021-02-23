//Create variables here
var saddog, happyDog, database, foodS, foodStock;
var dog;
var milk;
var x;
var y;

function preload()
{
  saddog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/happydog.png");
  milk=loadImage("images/Milk.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(saddog);
  dog.scale=0.3;

  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on('value',(data)=>{
    foodS=data.val();
  })
}


function draw() {  
background(46, 139, 87);
if(foodS!=0){
  console.log('Hello');
  for (var i=0;i<foodS;i++){
    console.log(i);
    if(i%10==0){
      x=30;
      y=y+50;
      }

    image(milk,x,y,50,50)
    x=x+30;  
  }
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
 fill("blue");
 text("Remaining Food : "+foodS,250,50);


}

function writeStock(milk){
  milk--;
  database.ref('/').update({
    Food:milk
  })
}



