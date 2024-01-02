// rotating square, moves with mouse

var sizewidth,
	sizeheight;
var cnvlimit = 0.89;  // limits the h & w of the canvas

var angle = 0.0

function setup() {
 
sizewidth = floor(window.innerWidth * cnvlimit);
sizeheight = floor(window.innerHeight * cnvlimit);
    
createCanvas(windowWidth, windowHeight);

    let cnv = createCanvas(sizewidth, sizeheight, WEBGL);  //  for some reason, needs'let'
 
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag
    
    background("white");
    stroke("#328cc1");
    strokeWeight(2);

}


function draw() {

  if (mouseIsPressed) {
      if (mouseButton == LEFT){
          stroke("#328cc1"); }
      if (mouseButton == RIGHT){
          stroke("white");}
    
          
         translate(mouseX - (sizewidth/2), mouseY - (sizeheight/2));
          var scalar = mouseX / 120.0;
                                
          rotate(angle);
          rect (-15,-15,30,30);
          angle += 0.1;
      
      }

}
      


//  function mousePressed()  { noLoop(); }
//  function mouseReleased() { loop();   }
