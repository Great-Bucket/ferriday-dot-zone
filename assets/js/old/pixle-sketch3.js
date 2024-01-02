// new p5();
// Description:  Pointillist technique adapted from Dan Shiffman.

var img,
	pix,
	x,
	y,
	sizewidth,
	sizeheight;
	

function preload() {
  img = loadImage('./assets/imagez/PanopticonPrison.png');
}

function setup() {
	sizewidth  = floor(window.innerWidth * 0.8);
	if (sizewidth > img.width) {sizewidth = img.width;}  // checks to make sure canvas is not larger than the image.
	sizeheight = floor((9*sizewidth)/16);  // uses a 16:9 ratio to pick the height based on the innerwidth.
    let cnv = createCanvas(sizewidth, sizeheight);  //  for some reason, 'let' has to be left here
	
	img.resize(sizewidth, 0); // resizes the image proportionally by using 0 as the value for the high parameter.
	
	imageMode(CENTER);  

  	noStroke();
	background(23,33,43);
	img.loadPixels();
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag

}

function draw() {
   x = floor(random(img.width));
   y = floor(random(img.height));

// . ::::::: DEBUGGING . ::::::
//	print ('this is pix:'+pix)
//	print(x, y);
	print ('img width = '+img.width);
	print ('cvs width = '+sizewidth);
	print ('inner width ='+window.innerWidth);
	
	
  	pix = img.get(x, y);  // uses the x and y parameters of the RESIZED loaded image to get the value of one pixel ( [R,G,B,A] values )
	
	fill(pix);  // used to have ',128' after the '(pix'  Seems to run fine without it.
  	ellipse(x, y, 4, 4);
}

