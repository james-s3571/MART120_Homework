//character variables
var playerx = 100;
var playery = 100;

//key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//enemyone
var enemyonex = 300
var enemyoney = 200
var enemyoneMovement = Math.floor(Math.random() * 10) + 1;

//enemytwo
var enemytwox = 50
var enemytwoy = 400
var enemytwoMovement = Math.floor(Math.random() * 10) + 1;

//mouse event
var mousex;
var mousey;

//win
function win()
{
if(playerx > 540 && playery > 590)
    {
    fill(0);
    stroke(5);
    textSize(32);
    text("You Win!", 300, 300);
    }
}

//movement
function movement()
{
    if (keyIsDown(83)) 
    {
      playery += 10;
    } 
    else if (keyIsDown(87)) 
    {
      playery -= 10;
    }
    else if (keyIsDown(65))
    {
        playerx -= 10;
    }
    else if (keyIsDown(68))
    {
        playerx += 10;
    }
}

//enemies
function enemies()
{
    //enemyone
    fill(138, 58, 74);
    rect(enemyonex,enemyoney,50,30);
    enemyonex+=enemyoneMovement
    enemyoney-=enemyoneMovement

    if(enemyonex > width)
    {
        enemyonex = 0;
    }
    if(enemyonex < 0)
    {
        enemyonex = width;
    }
    if(enemyoney > height)
    {
        enemyoney = 0;
    }
    if(enemyoney < 0)
    {
        enemyoney = height;
    }

    //enemytwo
    ellipse(enemytwox,enemytwoy,40,60);
    enemytwox+=enemytwoMovement
    enemytwoy+=enemytwoMovement

    if(enemytwox > width)
    {
        enemytwox = 0;
    }
    if(enemytwox < 0)
    {
        enemytwox = width;
    }
    if(enemytwoy > height)
    {
        enemytwoy = 0;
    }
    if(enemytwoy < 0)
    {
        enemytwoy = height;
    }
    circle(mousex, mousey, 50);
}

//createplayer
function createplayer()
{
    fill(182, 198, 137);
    circle(playerx,playery,30);
}

//mouse event
function mouseClicked() 
{  
    mousex = mouseX;
    mousey = mouseY;
}

//border
function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,540, thickness);
    rect(width-thickness,0,thickness,height);
}

function setup()
{

    createCanvas(600, 600);
}

function draw()
{
    //background and border
    background(135,216,122);
    stroke(0);
    fill(0);

    createBorders(10);

    createplayer();

    movement();

    enemies();

    win();

    mouseClicked();
}

