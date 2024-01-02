
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




function preload() {
//	img   = loadImage( "./assets/imagez/AEI_image_sculpture_500x250.jpg");
//	font1 = loadFont(  "./assets/fontz/computer_7.ttf");
//	font2 = loadFont(  "./assets/fontz/SpaceMono-Regular.ttf");
	
}


function setup() {
    
    
    
sizewidth = floor(window.innerWidth * cnvlimit);
sizeheight = floor(window.innerHeight * cnvlimit);
    
createCanvas(windowWidth, windowHeight);

    let cnv = createCanvas(sizewidth, sizeheight, WEBGL);  //  for some reason, needs'let'
 
	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag
    
    background("blue");
    
  fill(102);
  rect(81, 81, 63, 63);
    
    
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1); // removes the question mark
var queries = queryString.split("&");
    
document.write(queries[0] + "<br>"); // need to make this a variable and also split it on the equals sign
    
var feeling_chosen = queries[0]; 
    
	
//	imageMode(CENTER);  
//	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag  removed for now
    


      colorone0 = int(feeling_chosen.charCodeAt(0));
      colorone1 = int(feeling_chosen.charCodeAt(1));     
      colorone2 = int(feeling_chosen.charCodeAt(2));
      
//      colortwo0 = int(feelings[feelingcount2].charCodeAt(0));     
//      colortwo1 = int(feelings[feelingcount2].charCodeAt(1));      
//      colortwo2 = int(feelings[feelingcount2].charCodeAt(2));
	
      rgbone0 = int( map(colorone0, 97,122,rgblow,rgbhigh));
      rgbone1 = int( map(colorone1, 97,122,rgblow,rgbhigh));
      rgbone2 = int( map(colorone2, 97,122,rgblow,rgbhigh));      
//      rgbtwo0 = int( map(colortwo0, 97,122,rgblow,rgbhigh));       
//      rgbtwo1 = int( map(colortwo1, 97,122,rgblow,rgbhigh));       
//      rgbtwo2 = int( map(colortwo2, 97,122,rgblow,rgbhigh));      
      

    
    
    
    
//    :::::::::::::::

    
    
//    var tt = document.createTextNode (feeling_chosen);
//    feeling1_to_insert.appendChild(tt);
//    document.body.appendChild(feeling1_to_insert);

    
 

    



}

//::::::::::::::::::::::::::::::::::::::::DRAW:::::::::::::::::::::::::::::::::::

function draw() {
    
    ellipse(50, 50, 80, 80);
	 
//	cursor(ARROW);
	
	
//		//  1 box variables for clicking on choice one.
//	var boxx1 = (brdr+10); 
//	var boxy1 = ((st+t1+t2+(t3)+(sp*15))-t3);  // same y as the number, but subtracted by the font height.
//	var boxw1 = 300;
//	var boxh1 = t3*1.3;
//	
//
//	
//		// 2 box ariables for clicking on choice two.
//	var boxx2 = (brdr+10); 
//	var boxy2 = ((st+t1+t2+(t3*2)+(sp*20))-t3);  // same y as the number, but subtracted by the font height.
//	var boxw2 = 300;
//	var boxh2 = t3*1.3;
//	
//	
////:::::::::::::::::::::::::::::::::::::::: 1 :::::::::::::::::::::::::::::::::::	
//	
//	if ((mouseX > boxx1) && (mouseX < boxx1 + boxw1) &&  // checking if the mouse is over the first emotion
//	    (mouseY > boxy1) && (mouseY < boxy1 + boxh1) ) {
//		
//									cursor(HAND);
//				if (mouseIsPressed){
//									cursor(ARROW);
		
					
//	background(bac);  // clear the screem
					


//::::::::::::::::: 1 print the color ellipses :::::::
		
	noStroke();
	ellipseMode(CORNER);
	//fill(rgbone0, rgbone1, rgbone2, 128);
	//fill(bac);
	//rect(positionx, positiony, sizer1, sizer2);
	fill(rgbone0, rgbone1, rgbone2);
	ellipse(positionx, positiony, sizer1,sizer2);

	//fill(rgbone1, rgbone2, rgbone0, 50);
	//fill(255, 255);
	//rect(positionx_b, positiony_b, sizer1b, sizer2b);
	fill(rgbone1, rgbone2, rgbone0);
	ellipse(positionx_b, positiony_b, sizer1b,sizer2b);

	//fill(rgbone2, rgbone0, rgbone1, 40);
	//rect(positionx_c, positiony_c, sizer1c, sizer2c);
	fill(rgbone2, rgbone0, rgbone1);
	ellipse(positionx_c, positiony_c, sizer1c, sizer2c);
		
					
//::::::::::::::::::::1 Second Screen based on selection of emotion above
					
//    textSize(t1-2);
//	textFont(font1);
//
//    fill(210);
//	stroke(100);
//			text("You selected: ", brdr, 45);
//			text(feeling_chosen, brdr+120, 45);
//
//	  textFont(font2);
//	  noStroke();
//					
//	  fill (80)    // Dropshadow
//      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100+1);
//      text("history since birth and thus feels the state of your intelligently emotional artificiality to be:", brdr+1, 130+1);
//		
//      fill(240); // return to main fill
//      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100);
//      text("history since birth and thus feels the state of your intelligently emotional artificiality to be:", brdr+1, 130);
//		


//::::::::::::::::: 1 printing the color codes :::::::
		
			fill(150);
		    textSize(t1+2);
	//		textFont(font1);
	 //		text("Head",110+1,listy+1); // dropshadow
		
			fill(rgbone0,rgbone1,rgbone2);
     //        text("Head",110,listy);
      		ellipse(70,listy-20,30,30);
      
      		fill(150);
	 //		text("Heart",110+1,listy+43+1); // dropshadow
		
			fill(rgbone1, rgbone2,rgbone0);
       //		text("Heart",110,listy+43);
      		ellipse(70,listy+20,30,30);
      
      		fill(150);
	 //		text("Root", 110+1, listy+84+1); // dropshadow
		
			fill(rgbone2, rgbone0,rgbone1);
      //		text("Root", 110, listy+84);
      		ellipse(70,listy+60,30,30);   

					
					
//					textSize(t1-7);
//	 				textFont(font2);
//					fill(210);
//					stroke(100);
		 //			text("(reload the page to explore more)", 70, listy+150)

					
				//	noLoop();
			//	}
    }
		
//:::::::::::::::::::::::::::::::::::::::: 2 :::::::::::::::::::::::::::::::::::
	
//	else if ((mouseX > boxx2) && (mouseX < boxx2 + boxw2) &&  // checking if the mouse is over the 2nd emotion
//	          (mouseY > boxy2) && (mouseY < boxy2 + boxh2) ) {
//		
//									cursor(HAND);
//				if (mouseIsPressed){
//									cursor(ARROW);		
//				
//					
//	background(bac);  // clear the screen
//					
//
////::::::::::::::::: 2 Draw the color ellipses :::::::
//		
//	noStroke();
//	ellipseMode(CORNER);
//	//fill(rgbtwo0, rgbtwo1, rgbtwo2, 128);
//	fill(bac);
//	rect(positionx, positiony, sizer1, sizer2);
//	fill(rgbtwo0, rgbtwo1, rgbtwo2);
//	ellipse(positionx, positiony, sizer1,sizer2);
//
//	//fill(rgbtwo1, rgbtwo2, rgbtwo0, 50);
//	//fill(255, 255);
//	//rect(positionx_b, positiony_b, sizer1b, sizer2b);
//	fill(rgbtwo1, rgbtwo2, rgbtwo0);
//	ellipse(positionx_b, positiony_b, sizer1b,sizer2b);
//
//	//fill(rgbtwo2, rgbtwo0, rgbtwo1, 40);
//	//rect(positionx_c, positiony_c, sizer1c, sizer2c);
//	fill(rgbtwo2, rgbtwo0, rgbtwo1);
//	ellipse(positionx_c, positiony_c, sizer1c, sizer2c);
//					
//					
//					
////::::::::::::::::::::Second Screen 1 based on selection of emotion above  :::::::::
//
//    textSize(t1-1);
//	textFont(font1);
//
//    fill(210);
//	stroke(100);
//			text("You selected: ", brdr, 45);
//			text(feelings[feelingcount2], brdr+120, 45);
//
//	  textFont(font2);
//	  noStroke();
//	  fill (80)    // Dropshadown
//      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100+1);
//      text("history since birth and thus feels the state of your artificially intelligent emotionality to be:", brdr+1, 130+1);
//
//      fill(240); // return to main fill
//      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100);
//      text("history since birth and thus feels the state of your artificially intelligent emotionality to be:", brdr+1, 130);
//	
//		
//
////::::::::::::::::: 2 printing the color codes :::::::
//		
//			fill(150);
//		    textSize(t1+2);
//			textFont(font1);
//			text("Head",110+1,listy+1); // dropshadow
//		
//			fill(rgbtwo0,rgbtwo1,rgbtwo2);
//            text("Head",110,listy);
//      		ellipse(70,listy-20,30,30);
//      
//      		fill(150);
//			text("Heart",110+1,listy+43+1); // dropshadow
//		
//			fill(rgbtwo1, rgbtwo2,rgbtwo0);
//      		text("Heart",110,listy+43);
//      		ellipse(70,listy+20,30,30);
//      
//      		fill(150);
//			text("Root", 110+1, listy+84+1); // dropshadow
//		
//			fill(rgbtwo2, rgbtwo0,rgbtwo1);
//      		text("Root", 110, listy+84);
//      		ellipse(70,listy+60,30,30);   
//					
//					
//					textSize(t1-7);
//	 				textFont(font2);
//					fill(210);
//					stroke(100);
//					text("(reload the page to explore more)", 70, listy+150)
//					
//
//		 noLoop();
//					
//				}
//		}
       
//	}	



