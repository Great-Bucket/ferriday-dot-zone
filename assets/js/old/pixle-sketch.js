new p5();
// Description:  Pointillist technique adapted from Dan Shiffman.

var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage('./assets/imagez/PanopticonPrison-2.jpg');
}

function setup() {
  createCanvas(1000, 667);
  smallPoint = 1;
  largePoint = 1;
  imageMode(CENTER);
  noStroke();
  background(23,33,43);
  img.loadPixels();

}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
