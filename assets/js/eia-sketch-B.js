
// 'Emotionally Intelligent Artifice'
//  Exploring how you feel about how a computer feels about you.
//  Orignially inspired by the London Algorithmic Art Hackathon
//  Feelings list adapted from the Center for Nonviolent Communication, https://www.cnvc.org/

var feelingcount1,
    feelingcount2,
    thechoice;

var colorone0,
    colorone1,
    colorone2;

var rgbone0,
    rgbone1,
    rgbone2;

var dotcol1,
    dotcol2,
    dotcol3;

var golden = 1.61803;  // golden ratio for drawing ellipses

var feeling1_to_insert,
    feeling2_to_insert,
    container_block,
    feeling_chosen;


    var cnvlimit = 0.650;  // limits the h & w of the canvas


    var size_width  = window.innerWidth *  cnvlimit;
    if (size_width > 995) { size_width = 995;}  // 1000px is CSS column max size.
    var size_height  = size_width * 0.62;


//:::::::::: Variables for creating the three ellipses


		var HEAD_width = size_width * 0.96;

		var HEAD_height = HEAD_width / golden;

		var HEART_width = HEAD_height;
		var HEART_height = HEART_width / golden;

		var ROOT_width = HEART_height;  // root size
		var ROOT_height = ROOT_width / golden;



//::::::::: 1 Position of color ellipses :::::::::::::::: 
					
		var positionx = (size_width/2);
		var positiony = (size_height/2);

//:::::::::::Other Variables :::::::::::::::: 

		var rgblow  = 10; // RGB low end value
		var rgbhigh = 255; // RGB low end value


function setup() {
    
 //   print("width of each color " +HEAD_width,HEART_width, ROOT_width); // testing
 //   print('size width ' + size_width); // testing
    
let cnv = createCanvas(size_width, size_height);  //  needs 'let'
 
cnv.parent('eia-sketch-holder');  // relates the .js canvas to the HTML ID tag  


background('black')
    

//:::::::::::Scrape Querry String from URL for Feeling_Chosen Variable ::::::::
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1); // removes the question mark
var queries = queryString.split("&");
var feeling_chosen = queries[0]; 
    print(feeling_chosen);
    

//    ::::::::::::::::::::::::::::::::::  
//    Insert Feelings Selected into HTML/DOM 
//    ::::::::::::::::::::::::::::::::::  
    

    feeling1_to_insert = document.createElement( "SPAN" );
    feeling1_to_insert.innerHTML = feeling_chosen;
    
    container_block = document.getElementById( 'feeling-word' );
    container_block.appendChild( feeling1_to_insert ); 
    
    
    
//    :::::::::::::: Convert the characters in the selected feeling to convert to a number, and then to an RBG value.  This is the so-called 'intelligence' ha ha! ::::::::::::::::::::  


      colorone0 = int(feeling_chosen.charCodeAt(0));
      colorone1 = int(feeling_chosen.charCodeAt(1));     
      colorone2 = int(feeling_chosen.charCodeAt(2));

      rgbone0 = int( map(colorone0, 97,122,rgblow,rgbhigh));
      rgbone1 = int( map(colorone1, 97,122,rgblow,rgbhigh));
      rgbone2 = int( map(colorone2, 97,122,rgblow,rgbhigh));      
     
      
//print(colorone0,colorone1,colorone2);  // testing
//print("this " + rgbone0, rgbone1, rgbone2);   // testing
    
//    print(" positionx&y " + positionx, positiony); // testing

}


//:::::::::::::::::::::::Window Resized:::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Resizes the canvas when the browser window is adjusted

   function windowResized() {
       
    size_width  = window.innerWidth *  cnvlimit;
    if (size_width > 995) { size_width = 995;}  // 1000px is CSS column max size.
    size_height  = size_width * 0.62;
       
       
//:::::::::: RESIZED Variables for creating the three ellipses :::::::


		HEAD_width = size_width * 0.96;

		HEAD_height = HEAD_width / golden;

		HEART_width = HEAD_height;
		HEART_height = HEART_width / golden;

		ROOT_width = HEART_height;  // root size
		ROOT_height = ROOT_width / golden;



//::::::::: RESIZED  Position of color ellipses :::::::::::::::: 
					
		positionx = (size_width/2);
		positiony = (size_height/2);  

   resizeCanvas(size_width, size_height);
 
    }


//:::::::::::::::::::::::DRAW:::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function draw() {

print("size width "+size_width);
//:::::::: Print the main color ellipse :::::::
		
	noStroke();
	ellipseMode(CENTER);
    
// :::: HEAD ::::
	fill(rgbone0, rgbone1, rgbone2);
	ellipse(positionx, positiony, HEAD_width, HEAD_height);


// :::: HEART ::::
	fill(rgbone1, rgbone2, rgbone0);
	ellipse(positionx, positiony, HEART_width, HEART_height);
 
    
// :::: ROOT ::::
    fill(rgbone2, rgbone0, rgbone1);
	ellipse(positionx, positiony, ROOT_width, ROOT_height);


//:::::::: Print color to the reference dots :::::::
    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'dot1' ).style.backgroundColor = rgbToHex(rgbone0, rgbone1, rgbone2);
    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'dot2' ).style.backgroundColor = rgbToHex(rgbone1, rgbone2, rgbone0);
    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'dot3' ).style.backgroundColor = rgbToHex(rgbone2, rgbone0, rgbone1);

    

    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'chakra_name_color1' ).style.color = rgbToHex(rgbone0, rgbone1, rgbone2);
    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'chakra_name_color2' ).style.color = rgbToHex(rgbone1, rgbone2, rgbone0);
    
    dotcol1 = document.createElement( "SPAN" );
    document.getElementById( 'chakra_name_color3' ).style.color = rgbToHex(rgbone2, rgbone0, rgbone1);

    

    }

// ::::: Below to functions courtesy of https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb  ::::::: 
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
		