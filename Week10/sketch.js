function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(135,216,122);
    
    
    
    
    // face
    strokeWeight(5);
    fill(248, 240, 171);
    ellipse(300,300,430,490);
    
    
    
    // eyes
    fill(255,255,255);
    ellipse(210,250,100,50);
    ellipse(390,250,100,50);
    strokeWeight(0);
    fill(182, 198, 137);
    circle(190,250,40);
    circle(370,250,40);
    fill(0,0,0);
    circle(190,250,10);
    circle(370,250,10);


    // mouth
    strokeWeight(2);
    fill(234, 152, 121);
    rect(225,425,150,15);
    rect(225,440,150,15);

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
    textSize(32);
    text('Odd Me', 10, 30);
    textSize(16);
    text('James Schoenfelder', 10, 580);
}