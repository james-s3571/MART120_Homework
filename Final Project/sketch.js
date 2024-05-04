var parastand

function preload()
{
    parastand = createImg('parastand.png.png')
}


////////variables

//player
var playerx = 280;
var playery = 350;
var playerwidth = 100;
var playerheight = 75;

//gravity
var jump = false;
var direction = 1;
var velocity = 3;
var jumpstrength = 15;
var falling = 3; 
var minHeight = 400;
var maxHeight = 40
var jumpCounter = 0;

//obstacles
var boxx = 0;
var boxy = 330;
var boxWidth = 200;
var boxHeight = 40;

var sboxx = 300;
var sboxy = 200;
var sboxWidth = 200;
var sboxHeight = 40;

var tboxx = 700;
var tboxy = 100;
var tboxWidth = 400;
var tboxHeight = 30;

////////functions
function createplayer()
{
    strokeWeight(0);
    fill(182, 198, 137);
    //rect(playerx,playery,playerwidth,playerheight);
    image(parastand, playerx, playery, playerwidth, playerheight);
}

//////win text
function win()
{
if(playerx > 800 && playery < 100)
    {
    fill(235,244,42);
    stroke(4);
    textSize(78);
    text("You Win!", 400, 350);
    }
}


function createBorders()
{
    noFill();
    stroke(0);
    strokeWeight(10);
    rect(0,0,width,height)
}

///////////gravity
function gravity()
{
    if (playery >= minHeight && jump == false)
    {
        playery = playery+0;
        jumpCounter = 0;
    }
    else
    {
        playery = playery + (direction*velocity);
    }

    if (jump == true)
    {
        if (playery <= maxHeight || jumpCounter >= jumpstrength)
        {
            if (playery >= minHeight)
            {
                playery =minHeight;
            }
            else
            {
                velocity = falling;
            }
        }    
        else
            {               
                velocity = -jumpstrength;
                jumpCounter = jumpCounter+1;
            }
    }
    else
    {
        velocity = falling;
    }
    
}    



function movement()
{
    if (keyIsDown(37))
    {
        playerx -= 7;
    }
    else if (keyIsDown(39))
    {
        playerx += 7;
    }
}

function keyTyped()
{
    if (keyIsDown(32))
    {
        jump = true;
    }
    else
    {
        jump = false;
    }
}



/////////gamesetup
function setup()
{
    createCanvas(800, 500);    
}

function draw()
{
stroke(0);
fill(0);
background(175,237,249);
strokeWeight(2);
createBorders();
fill(48,235,66);
rect(8,450,790,50);



strokeWeight(1);
fill(0);
stroke(1);
textSize(20);
text("Use the left and right arrow keys to move!",20, 40);
text("Use the spacebar to jump!", 20, 60);
text("Exit here!", 710, 30);

gravity();
createplayer();
movement();
keyTyped();

win();

//obstacles
strokeWeight(15);
rect(boxx,boxy,boxWidth,boxHeight);
rect(sboxx,sboxy,sboxWidth,sboxHeight);
strokeWeight(10);
rect(tboxx,tboxy,tboxWidth,tboxHeight)
//collision


//collision();

if (playerx >= boxx-boxWidth/2 && playerx <= boxx+boxWidth/2 && playery+playerheight >= boxy-boxHeight/2 && playery+playerheight <= boxy+boxHeight/2 && jump == false)
{
    playery = playery;
    velocity = 0;
    jumpCounter = 0;
}

if (playerx >= sboxx-sboxWidth/2 && playerx <= sboxx+sboxWidth/2 && playery+playerheight >= sboxy-sboxHeight/2 && playery+playerheight <= sboxy+sboxHeight/2 && jump == false)
{
    playery = playery;
    velocity = 0;
    jumpCounter = 0;
}

if (playerx >= tboxx-tboxWidth/2 && playerx <= tboxx+tboxWidth/2 && playery+playerheight >= tboxy-tboxHeight/2 && playery+playerheight <= tboxy+tboxHeight/2 && jump == false)
{
    playery = playery;
    velocity = 0;
    jumpCounter = 0;
}
}    

