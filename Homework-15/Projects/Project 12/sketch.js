// X and Y for my character
var characterX = 100;
var characterY = 100;

// Key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Variables for the first enemy circle
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// Variables for the second enemy circle
var enemy2X = 150;
var enemy2Y = 200;
var enemy2XSpeed;
var enemy2YSpeed;

// Creating a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function moveEnemy() {
    shapeX -= shapeXSpeed;
    shapeY -= shapeYSpeed;

    // Bounce off the canvas edges for the first enemy circle
    if (shapeX > width || shapeX < 0) {
        shapeXSpeed *= -1;
    }

    if (shapeY > height || shapeY < 0) {
        shapeYSpeed *= -1;
    }
}

function moveEnemy2() {
    // Move the second enemy in the opposite direction
    enemy2X -= enemy2XSpeed;
    enemy2Y -= enemy2YSpeed;

    // Bounce off the canvas edges for the second enemy circle
    if (enemy2X > width - 20 || enemy2X < 20) {
        enemy2XSpeed *= -1;
    }

    if (enemy2Y > height - 20 || enemy2Y < 20) {
        enemy2YSpeed *= -1;
    }
}

function setup() {
    createCanvas(500, 600);
    // Random speed when it first starts for the first enemy circle
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

    // Random speed when it first starts for the second enemy circle
    enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    createCharacter(200, 350);
    createExit();
}

function createExit() {
    exitX = Math.floor(Math.random() * width);
    exitY = Math.floor(Math.random() * height);
}

function draw() {
    background(0, 0, 255);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders();

    // completion message
    textSize(20);
    text("Exit", width - 50, height - 50);

    //createCharacter (200,350);
    drawCharacter()
    characterMovement();

    // Draw the object created by pressing the mouse
    fill(120, 103, 140);
    circle(mouseShapeX, mouseShapeY, 25);

    // First Enemy Circle
    fill(13, 145, 14);
    circle(shapeX, shapeY, 80);

    // Second Enemy Circle
    fill(255, 0, 0); 
    circle(enemy2X, enemy2Y, 40);

    

    if (keyIsDown(w)) {
        characterY -= 10;
    }

    if (keyIsDown(s)) {
        characterY += 10;
    }

    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }

    if (keyIsDown(d)) {
        characterX += 10;
    }

    // Move the shapes
    moveEnemy();
    moveEnemy2();

    // character reaches the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(48);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // creating a shape based on the mouse click
    fill(120, 103, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (mouseIsPressed) {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
}

function createCharacter(x,y) 
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    // character
    // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(23, 40, 123);
    circle(characterX, characterY, 25); 
}

function createBorders() 
{
    // top
    rect(0, 0, width, 10);

    // left
    rect(0, 0, 10, height);

    // bottom
    rect(0, height - 10, width, 10);

    // right
    rect(width - 10, 0, 10, height - 50);

}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}