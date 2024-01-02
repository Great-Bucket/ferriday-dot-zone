
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
    colorone2;

      
var rgbone0,
    rgbone1,
    rgbone2;


var feeling1_to_insert,
    feeling2_to_insert,
    container_block,
    feeling_chosen;

    var cnvlimit = 0.50;  // limits the h & w of the canvas


    var size_width  = window.innerWidth * cnvlimit; // Canvas size best at 1000
    var size_height = window.innerHeight * cnvlimit;



//size_width = floor(window.innerWidth * cnvlimit);
//size_height = floor(window.innerHeight * cnvlimit);


//var listy = 800;  // y spacing for the HEAD HEART ROOT words and circles.
var listy = size_height - 195; // a hacky way to space the HEAD HEART ROOT above the fold, so to speak

//:::::::::::::Variables for spacing text

		var t1 = 19; 			  // type size one
		var t2 = t1*.75; 	      // type size two
		var t3 = t1*2.25;		  // type size three
		var sp = 8;			  // space between typed lines
		var st = 350;			  // the y-coordinate for first line

//:::::::::: Variables for creating the three ellipses
		var golden = 1.61803;  // golden ratio for drawing ellipses

		var sizer1 = size_width * 0.75;
		var sizer2 = (sizer1/golden);

		var sizer1b = sizer2;
		var sizer2b = sizer1b / golden;

		var sizer1c = sizer2b;
		var sizer2c = sizer1c / golden;

//::::::::: 1 Position of color ellipses
					
		var positionx = (size_width/2);
		var positiony = (size_height/2);



//:::::::::::Other Variables

		var img;       // image for homescreen
//		var font1, font2;     // variables for fonts
		
        var brdr = 60; // boarder for left side text
		
		var rgblow  = 10; // RGB low end value
		var rgbhigh = 255; // RGB low end value


function setup() {
    
print("position "+ positionx, positiony, sizer1,sizer2); // testing
    

    
//createCanvas(windowWidth, windowHeight);

let cnv = createCanvas(size_width, size_height);  //  for some reason, needs'let'
 
cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag  

background("pink");  // testing
    

//:::::::::::Querry String to Feeling_Chosen Variable ::::::::
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1); // removes the question mark
var queries = queryString.split("&");
var feeling_chosen = queries[0]; 
    print(feeling_chosen);
    
//document.write(queries[0] + "<br>"); // Prints to screen. Need to make this a variable and also split it on the equals sign

      colorone0 = int(feeling_chosen.charCodeAt(0));
      colorone1 = int(feeling_chosen.charCodeAt(1));     
      colorone2 = int(feeling_chosen.charCodeAt(2));

      rgbone0 = int( map(colorone0, 97,122,rgblow,rgbhigh));
      rgbone1 = int( map(colorone1, 97,122,rgblow,rgbhigh));
      rgbone2 = int( map(colorone2, 97,122,rgblow,rgbhigh));      
     
      
//print(colorone0,colorone1,colorone2);  // testing
print("this " + rgbone0, rgbone1, rgbone2);   // testing

}

//:::::::::::::::::::::::DRAW:::::::::::::::::::::::::

function draw() {


//::::::::::::::::: Print the color ellipse responses :::::::
		
	noStroke();
	ellipseMode(CENTER);

	fill(rgbone0, rgbone1, rgbone2);
//    fill ('orange');
	ellipse(positionx, positiony, sizer1,sizer2);
//    document.getElementById( 'dot1' ).style.backgroundColor = ("orange") ;
    
    document.getElementById( 'dot1' ).style.backgroundColor = rgbone0, rgbone1, rgbone2;
    
    
//    print(" colors "+rgbone0, rgbone1, rgbone2); // debugging

	fill(rgbone1, rgbone2, rgbone0);
	ellipse(positionx, positiony, sizer1b,sizer2b);
    document.getElementById( 'dot2' ).style.backgroundColor = rgbone1, rgbone2, rgbone0 ;
    
    
    fill(rgbone2, rgbone0, rgbone1);
	ellipse(positionx, positiony, sizer1c, sizer2c);
    
//    document.getElementById( 'dot3' ).style.backgroundColor = "blue";
    

    }
		