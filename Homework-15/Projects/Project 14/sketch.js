// X and Y for my character
var characterX = 100;
var characterY = 100;

// Key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Creating a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

// Array to store enemy objects
var enemies = [];

function setup() {
    createCanvas(500, 600);
    // Initialize enemies
    initializeEnemies();
}

function initializeEnemies() {
    for (var i = 0; i < 5; i++) {
        enemies.push({
            x: Math.random() * width,
            y: Math.random() * height,
            xSpeed: Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1),
            ySpeed: Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1),
            shape: i % 5  // Use the remainder to determine the shape (0 to 4)
        });
    }
}

function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].x -= enemies[i].xSpeed;
        enemies[i].y -= enemies[i].ySpeed;

        // Bounce off the canvas edges
        if (enemies[i].x > width || enemies[i].x < 0) {
            enemies[i].xSpeed *= -1;
        }

        if (enemies[i].y > height || enemies[i].y < 0) {
            enemies[i].ySpeed *= -1;
        }
    }
}

function drawEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].shape === 0) {
            // First Enemy Circle
            fill(13, 145, 14);
            circle(enemies[i].x, enemies[i].y, 80);
        } else if (enemies[i].shape === 1) {
            // Second Enemy Circle
            fill(255, 0, 0);
            circle(enemies[i].x, enemies[i].y, 40);
        } else if (enemies[i].shape === 2) {
            // Third Enemy Square
            fill(255, 255, 0);
            square(enemies[i].x, enemies[i].y, 60);
        } else if (enemies[i].shape === 3) {
            // Fourth Enemy Triangle
            fill(0, 255, 255);
            triangle(enemies[i].x, enemies[i].y, enemies[i].x + 40, enemies[i].y - 40, enemies[i].x + 80, enemies[i].y);
        } else if (enemies[i].shape === 4) {
            // Fifth Enemy Ellipse
            fill(255, 0, 255);
            ellipse(enemies[i].x, enemies[i].y, 50, 30);
        }
    }
}

function draw() {
    background(0, 0, 255);
    stroke(0);
    fill(0);

    // top
    rect(0, 0, width, 10);

    // left
    rect(0, 0, 10, height);

    // bottom
    rect(0, height - 10, width, 10);

    // right
    rect(width - 10, 0, 10, height - 50);

    // completion message
    textSize(20);
    text("Exit", width - 50, height - 50);

    // Move and draw the enemies
    moveEnemies();
    drawEnemies();

    // character
    fill(23, 40, 123);
    circle(characterX, characterY, 25);

    if (keyIsDown(w)) {
        characterY -= 10;
    }

    if (keyIsDown(s)) {
        characterY += 10;
    }

    if (keyIsDown(a)) {
        characterX -= 10;
    }

    if (keyIsDown(d)) {
        characterX += 10;
    }

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

// Function to handle mouse clicks
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}