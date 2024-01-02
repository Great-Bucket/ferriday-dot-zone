// new p5();  B
// Leaving the Watching ot the Watched
// Modelo image via https://www.atlasobscura.com/articles/panopticon-prison-cuba
// 'Watching' quote inspired by Bentham, Jeremy (1995). Božovič, Miran (ed.). The Panopticon Writings. London: Verso

var img,
	pix,
	x,
	y,
	sizewidth,
	sizeheight,
    timer,
    sizer;

var start = 300;


function preload() {
  img = loadImage('./assets/imagez/Modelo.jpg');
}

function setup() {
    

    
    if ( window.innerWidth <= 400 ) { start = 500;}  // responsive for small screens lengthen the delay.
    
	sizewidth  = floor(window.innerWidth * 0.8);
    
	if (sizewidth > img.width) {sizewidth = img.width;}  // checks to make sure canvas is not larger than the image.
    
	sizeheight = floor((9*sizewidth)/16);  // uses a 16:9 ratio to pick the height based on the innerwidth.
    
    let cnv = createCanvas(sizewidth, sizeheight);  //  for some reason, 'let' has to be left here
	
    img.resize(sizewidth, 0); // resizes the image proportionally by using 0 as the value for the high parameter.
    
    

	background(23,33,43);  //makes background of sketch dark color from dark area of Modelo.jpg
   
//	img.loadPixels();  // not sure this is needed?
    
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag
    
    image (img,0,0); // displays the modelo.jpg
    
    stroke (23,33,43);  // polygon shape outline
    strokeWeight(1);
//    if (window.innerWidth <= 400) {  strokeWeight(5); }
//  noStroke();

}

// . function below resizes the canvas when the browser window is adjusted.
   function windowResized() {
       
    // Below 2 lines repeat the logic above to determine cnv size   
	sizewidth  = floor(window.innerWidth * 0.8); 
	sizeheight = floor((9*sizewidth)/16);  
       
    img.resize(sizewidth, 0); // resizes the image proportionally by using 0 as the value for the high parameter.

   resizeCanvas(sizewidth, sizeheight);
   background(23,33,43); // makes background of sketch dark. color from dark area of Modelo.jpg
   image (img,0,0); // displays the modelo.jpg
       
    }


function draw() {
//   image(img);
    
   x = floor(random(img.width));
   y = floor(random(img.height));

 // 	pix = img.get(x, y);  // uses the x and y parameters of the RESIZED loaded image to get the value of one pixel ( [R,G,B,A] values )
	
    fill('#f3f9fa');  // light cyan color. used to have ',128' after the '(pix'  Seems to run fine without it. the 128 adjusts opacity and is not complete.  (was 0, 2, 11)
    
	// fill(85, 188, 201);  dark cyan color. used to have ',128' after the '(pix'  Seems to run fine without it. the 128 adjusts opacity and is not complete.  (was 0, 2, 11)
    
//  	ellipse(x, y, 20, 20);
//    rect (x,y, 20, 20);
//    let ran1 = random (8,16);
//    let ran2 = random (3,5);
//    rotate(frameCount);
//    rotate (PI / random (0.5, 1.5))
    
//  for (counter1 += 1; counter1 > 9999)
    
 
    timer = millis();
    
    if (timer >= start && window.innerWidth <= 400){
        sizer= 1 + floor(timer/2500);     
        polygon(x, y, sizer , 5);
        
        } else if (timer >= start){
        
            sizer= 2 + floor(timer/500);     
 
            polygon(x, y, sizer , 6);
        }
    
      

//  ::::::: DEBUGGING . ::::::
//    print (sizer);
//  print ('this is start: '+start);
//  print ('this is time passed: '+timePassed);
//   print ('this is timer: '+timer);
//  print ('this is pix:'+pix)
//	print(x, y);
//	print ('img width = '+img.width);
//	print ('cvs width = '+sizewidth);
//	print ('inner width ='+window.innerWidth);
    
}

  function mousePressed()  { noLoop(); }
  function mouseReleased() { loop();   }


function polygon(x1, y1, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x1 + cos(a) * radius;
    let sy = y1 + sin(a) * radius;
    vertex(sx, sy);
  }
    
  endShape(CLOSE);
}

