
// 'Emotionally Intelligent Artifice'
//  Exploring how you feel about how a computer feels about you.
//  Designed by Reed O'Beirne with assistance from Oliver Mattos and Nils Funk
//  Orignially inspired by the London Algorithmic Art Hackathon (April 2019)
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


var feeling1_to_insert,
    feeling2_to_insert,
    container_block,
    feeling_chosen,
    sizewidth,
    sizeheight;






		var rgblow  = 10; // RGB low end value
		var rgbhigh = 255; // RGB low end value


function setup() {


sizewidth = floor(window.innerWidth * .5);
sizeheight = floor(window.innerHeight * .5);
    
//createCanvas(windowWidth, windowHeight);

    let cnv = createCanvas(sizewidth, sizeheight);  //  for some reason, needs'let'
 
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag
    

    
    
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1); // removes the question mark
var queries = queryString.split("&");
    

    
var feeling_chosen = queries[0]; 

    
	

        print(feeling_chosen);

      



}

//::::::::::::::::::::::::::::::::::::::::DRAW:::::::::::::::::::::::::::::::::::

function draw() {
    
    fill(102);
    ellipse(50, 50, 80, 80);

    fill(102);
    rect(81, 81, 63, 63);
	 



    }
		




