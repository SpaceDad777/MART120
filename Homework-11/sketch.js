//X and Y for my character
var characterX = 100;
var characterY = 100;

//key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for the object
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYspeed;

//creating a shape when mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500,600);
    //random speed when it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0); 
    

    //top
    rect(0,0,width,10);

    //left
    rect(0,0,10,height);

    //bottom
    rect(0,height -10,width, 10);

    //right
    rect(width-10,0,10,height-50);

    //completion message
    textSize(20);
    text("Exit", width-50,height-50)

    //character
    fill(23,40,123);
    circle(characterX, characterY,25);

    if(keyIsDown(w))
    {
        characterY -=10;
    }

    if(keyIsDown(s))
    {
        characterY += 10;
    }

    if(keyIsDown(a))
    {
        characterX -= 10;
    }

    if(keyIsDown(d))
    {
        characterX += 10;
    }
    
    //enemy
    fill(13,145,14);
    circle(shapeX,shapeY, 10);
    circle(x,y,diameter);
    x += 10;
    y += 3;
    

     //random speed when it initally starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
     
    //move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYspeed;

    //check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }

    if(shapeX < 0)
    {
        shapeY = width;
    }

    if(shapeY > height)
    {
        shapeY = 0;
    }

    if(shapeY < 0)
    {
        shapeY =  height;
    }
    //character reaches the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(48);
        text("You Win!", width/2-50, height/2-50);
    }

    //creating a shape based on the mouse click
    fill(120,1030,140);
    circle(mouseShapeX, mouseShapeY, 25);

}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
