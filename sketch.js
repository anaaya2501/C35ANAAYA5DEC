var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);

    //creating databas
database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
//.ref telss you which node you are interested in from the database
//.on tells the computer that you have to listen to the value in the database
var ballPos = database.ref("Ball/Position")
ballPos.on("value",readPos,showError);

    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function writePos(x,y){
    database.ref("Ball/Position").set({'x':position.x + x,'y':position.y + y})
}
 function readPos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
     
 }

 function showError(){
     console.log("error");
 }

 