function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill(random(256), random(256), random(256), random(50, 201));
  noStroke();
  circle(random(mouseX-80, mouseX+81), random(mouseY-80, mouseY+81), random(10, 41));
}
