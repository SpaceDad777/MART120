var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 250;
var bodyY = 300; 
var bodyDirectionY = 3; 

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(120);
  console.log("draw?");
  strokeWeight(5);

  // text
  text('My self portrait', 10, 30);
  textSize(16);
    

    text('By Gwenith VanGeystel', 300, 30);
    textSize(16);
    size+= sizeDirection;
    count++;
  if (count > 5) {
        sizeDirection *=-1;
        count= 0;
  }
  
  

  // head
  fill(255, 204, 0); // Yellowish color
  circle(headX, headY, 175);
  headX += headDirection;
  if (headX >= 418 || headX <= 82) {
    headDirection *= -1;
  }

  // left eye
  fill(0, 0, 255); // Blue color
  point(200, 225);

  // right eye
  fill(0, 0, 255); // Blue color
  point(290, 225);

  // nose
  circle(250, 245, 3);

  // mouth
  fill(0); // Black color
  line(230, 275, 270, 275);

  // neck
  fill(255, 204, 0); // Yellowish color
  rect(240, 325, 25, 70);
  

  // body
  fill('rgb(0,255,0)'); // Green
  triangle(bodyX, 600, 250, bodyY, 350, 600);

 
  bodyY += bodyDirectionY;
  if (bodyY >= 375 || bodyY <= 225) {
    bodyDirectionY *= -1;
  }
}