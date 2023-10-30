function setup()
{
    createCanvas(500, 600);

}
function draw()
{
    background(120,45,78);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
}
    //X add +/-10 and Y add +/- 75

    
function draw() {
    background(120);
    console.log("draw?");
    strokeWeight(5);

       //text
    text('My self portrait', 10, 30);
    textSize(16);

    text('By Gwenith VanGeystel', 300, 30)
    textSize(32);
  
    // head
    fill(255, 204, 0); // Yellowish color
    circle(250, 225, 200);
    
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
    triangle(150, 600, 250, 375, 350, 600);

  }
