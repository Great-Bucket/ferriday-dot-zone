// new p5();
// Description:  Pointillist technique adapted from Dan Shiffman.
// Modelo image via https://www.atlasobscura.com/articles/panopticon-prison-cuba
// 'Watching' quote inspired by Bentham, Jeremy (1995). Božovič, Miran (ed.). The Panopticon Writings. London: Verso

var img,
	pix,
	x,
	y,
	sizewidth,
	sizeheight;
	

function preload() {
  img = loadImage('./assets/imagez/Modelo.jpg');
}

function setup() {
	sizewidth  = floor(window.innerWidth * 0.8);
	if (sizewidth > img.width) {sizewidth = img.width;}  // checks to make sure canvas is not larger than the image.
	sizeheight = floor((9*sizewidth)/16);  // uses a 16:9 ratio to pick the height based on the innerwidth.
    let cnv = createCanvas(sizewidth, sizeheight);  //  for some reason, 'let' has to be left here
	
	img.resize(sizewidth, 0); // resizes the image proportionally by using 0 as the value for the high parameter.
	
	imageMode(CENTER);  

  	noStroke();

	background(23,33,43); // makes background of sketch dark
	img.loadPixels();
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag

}

// . function below resizes the canvas when the browser window is adjusted.
   function windowResized() {
       
    // Below 2 lines repeat the logic above to determine cnv size   
	sizewidth  = floor(window.innerWidth * 0.8); 
	sizeheight = floor((9*sizewidth)/16);  
       
    img.resize(sizewidth, 0); // resizes the image proportionally by using 0 as the value for the high parameter.

   resizeCanvas(sizewidth, sizeheight);
   background(23,33,43); // makes background of sketch dark
       
    }


function draw() {
   x = floor(random(img.width));
   y = floor(random(img.height));

  	pix = img.get(x, y);  // uses the x and y parameters of the RESIZED loaded image to get the value of one pixel ( [R,G,B,A] values )
	
	fill(pix, 128);  // used to have ',128' after the '(pix'  Seems to run fine without it.
  	ellipse(x, y, 2, 2);
    
//  ::::::: DEBUGGING . ::::::
//	print ('this is pix:'+pix)
//	print(x, y);
//	print ('img width = '+img.width);
//	print ('cvs width = '+sizewidth);
//	print ('inner width ='+window.innerWidth);
    
}

