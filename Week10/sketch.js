function setup()
{
    createCanvas(600, 600);
}

//eye variables
var leyex = 210;
var leyey = 250;
var leyeMovement = Math.floor(Math.random() * 10) + 1;

var reyex = 390;
var reyey = 250;
var reyeMovement = Math.floor(Math.random() * 10) + 1; 


//mouth variables
var umouthx = 225;
var umouthy = 425;
var umouthMovement = Math.floor(Math.random() * 10) + 1;

var lmouthx = 225;
var lmouthy = 440;
var lmouthMovement = Math.floor(Math.random() * 10) + 1;


//diagonal variable
var circlex = 190
var circley = 250
var circleMovement = 3


//title variables
var size = 32;
var count = 0;
var change = 3;


// face
function draw()
{
    background(135,216,122);
    strokeWeight(5);
    fill(248, 240, 171);
    ellipse(300,300,430,490);

    
// eyes
    fill(255,255,255);
    ellipse(leyex,leyey,100,50);
    leyex+=leyeMovement
    if(leyex >= 545 || leyex <= 55)
    {
        leyeMovement *= -1;
    }

    ellipse(reyex,reyey,100,50);
    reyex+=reyeMovement
    if(reyex >= 545 || reyex <= 55)
    {
        reyeMovement *= -1;
    }
    strokeWeight(0);
    fill(182, 198, 137);
    circle(circlex,circley,40);
    circlex+=circleMovement
    circley+=circleMovement
    if(circlex >= 530 || circlex <= 10)
    {
        circleMovement *= -1;
    }
    circle(370,250,40);
    fill(0,0,0);
    circle(190,250,10);
    circle(370,250,10);


// mouth
    strokeWeight(2);
    fill(234, 152, 121);
    rect(umouthx,umouthy,150,15);
    umouthy+=umouthMovement
    if(umouthy >= 585 || umouthy <= 0)
    {
        umouthMovement *= -1;
    }

    rect(lmouthx,lmouthy,150,15);
    lmouthy+=lmouthMovement
    if(lmouthy >= 585 || lmouthy <= 0)
    {
        lmouthMovement *= -1;
    }


// nose
    fill(248, 240, 171)
    triangle(250,375,300,275,350,375);
    point(200,300)


// hair
    strokeWeight(30);
    fill(138, 98, 50);
    line(150,130,500,200);
    line(160,100,500,200);
    line(180,70,500,175);
    line(170,40,500,150);
    line(200,70,500,150);


// name and title
    textSize(size);
    text('Odd Me', 10, 40);
    size+=change;
    count++;
    if(count > 5)
    {
        change *=-1
        count = 0;
    }
    textSize(16);
    text('James Schoenfelder', 10, 580);
}