
// 'Emotionally Intelligent Artifice'
//  Exploring how you feel about how a computer feels about you.
//  Designed by Reed O'Beirne with assistance from Oliver Mattos and Nils Funk
//  Orignially inspired by the London Algorithmic Art Hackathon (April 2019)
//  Feelings list adapted from the Center for Nonviolent Communication, https://www.cnvc.org/


var bac = 0;  // background color for second screen

var feelingcount1,
    feelingcount2,
    thechoice;

var colorone0,
    colorone1,
    colorone2,
    colortwo0,
    colortwo1,
    colortwo2;
      
var rgbone0,
    rgbone1,
    rgbone2,
    rgbtwo0,
    rgbtwo1,
    rgbtwo2;

var feeling1_to_insert,
    feeling2_to_insert,
    container_block,
    feeling_chosen,
    sizewidth,
    sizeheight;

var cnvlimit = 0.89;  // limits the h & w of the canvas


//var listy = 800;  // y spacing for the HEAD HEART ROOT words and circles.
var listy = sizeheight - 195; // a hacky way to space the HEAD HEART ROOT above the fold, so to speak

//:::::::::::::Variables for spacing text

		var t1 = 19; 			  // type size one
		var t2 = t1*.75; 	      // type size two
		var t3 = t1*2.25;		  // type size three
		var sp = 8;			  // space between typed lines
		var st = 350;			  // the y-coordinate for first line

//:::::::::: Variables for creating the three ellipses
		var golden = 1.61803;  // golden ratio for drawing ellipses

		var sizer1 = 800;
		var sizer2 = (sizer1/golden);

		var sizer1b = sizer2;
		var sizer2b = sizer1b / golden;

		var sizer1c = sizer2b;
		var sizer2c = sizer1c / golden;

//::::::::: 1 Position of color ellipses
					
		var positionx = (sizewidth-sizer1)/2;
		var positiony = (sizeheight-sizer2)/2;

		var positionx_b = positionx + ((sizer1-sizer1b)/2);
		var positiony_b = positiony + ((sizer2-sizer2b)/2);

		var positionx_c = positionx + ((sizer1-sizer1c)/2);
		var positiony_c = positiony + ((sizer2-sizer2c)/2);


//:::::::::::Other Variables

		var img;       // image for homescreen
//		var font1, font2;     // variables for fonts
		
        var brdr = 60; // boarder for left side text
		
		var rgblow  = 10; // RGB low end value
		var rgbhigh = 255; // RGB low end value






function setup() {
    
    
    
sizewidth = floor(window.innerWidth * .5);
sizeheight = floor(window.innerHeight * .5);
    
//createCanvas(windowWidth, windowHeight);

    let cnv = createCanvas(sizewidth, sizeheight);  //  for some reason, needs'let'
 
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag
    
//    background("blue");
    

    




}

//::::::::::::::::::::::::::::::::::::::::DRAW:::::::::::::::::::::::::::::::::::

function draw() {
    
     fill(102);
  rect(81, 81, 63, 63);

}



