
// 'Emotionally Intelligent Artifice'
//  Exploring how you feel about how a computer feels about you.
//  Designed by Reed O'Beirne with assistance from Oliver Mattos and Nils Funk
//  Orignially inspired by the London Algorithmic Art Hackathon 
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
    feeling_chosen;


		var sizewidth  = window.innerWidth; // Canvas size best at 1000
		var sizeheight = window.innerHeight;


var listy = sizeheight - 195; // a hacky way to space the HEAD HEART ROOT above the fold, so to speak


//:::::::::::::Variables for spacing text

		var t1 = 19; 			// type size one
		var t2 = t1*.75; 	   	// type size two
		var t3 = t1*2.25;		// type size three
		var sp = 8;			  	// space between typed lines
		var st = 350;			// the y-coordinate for first line



//:::::::::: Variables for creating the three ellipses
		var golden = 1.61803;  // golden ratio for drawing ellipses

		var HEAD_width = 800;
		var HEAD_height = (HEAD_width/golden);

		var HEART_width = HEAD_height;
		var HEART_height = HEART_width / golden;

		var ROOT_width = HEART_height;
		var ROOT_height = ROOT_width / golden;

//::::::::: 1 Position of color ellipses
					
		var positionx = (sizewidth-HEAD_width)/2;
		var positiony = (sizeheight-HEAD_height)/2;

		var positionx_b = positionx + ((HEAD_width-HEART_width)/2);
		var positiony_b = positiony + ((HEAD_height-HEART_height)/2);

		var positionx_c = positionx + ((HEAD_width-ROOT_width)/2);
		var positiony_c = positiony + ((HEAD_height-ROOT_height)/2);


//:::::::::::Other Variables

		var img;       // image for homescreen
		var font1, font2;     // variables for fonts
		
        var brdr = 60; // boarder for left side text
		
		var rgblow  = 10; // RGB low end value
		var rgbhigh = 255; // RGB low end value

var feelings = ["apprehensive", "dread", "foreboding", "frightened", "mistrustful", "panicked", "petrified", "scared", "suspicious", "terrified", "wary", "worried", "aggravated", "dismayed", "disgruntled", "displeased", "exasperated", "frustrated", "impatient", "irritated", "irked", "enraged", "furious", "incensed", "indignant", "irate", "livid", "outraged", "resentful", "animosity", "appalled", "contempt", "disgusted", "dislike", "hate", "horrified", "hostile", "repulsed", "ambivalent", "baffled", "bewildered", "dazed", "hesitant", "lost", "mystified", "perplexed", "puzzled", "torn", "alienated", "aloof", "apathetic", "bored", "cold", "detached", "distant", "distracted", "indifferent", "numb", "removed", "uninterested", "withdrawn", "agitated", "alarmed", "discombobulated", "disconcerted", "disturbed", "perturbed", "rattled", "restless", "shocked", "startled", "surprised", "troubled", "turbulent", "turmoil", "uncomfortable", "uneasy", "unnerved", "unsettled", "upset", "ashamed", "chagrined", "flustered", "guilty", "mortified", "self-conscious", "beat", "burnt out", "depleted", "exhausted", "lethargic", "listless", "sleepy", "tired", "weary", "worn out", "agony", "anguished", "bereaved", "devastated", "grief", "heartbroken", "hurt", "lonely", "miserable", "regretful", "remorseful", "depressed", "dejected", "despair", "despondent", "disappointed", "discouraged", "disheartened", "forlorn", "gloomy", "heavy hearted", "hopeless", "melancholy", "unhappy", "anxious", "cranky", "distressed", "distraught", "edgy", "fidgety", "frazzled", "irritable", "jittery", "nervous", "overwhelmed", "restless", "stressed out", "fragile", "guarded", "helpless", "insecure", "leery", "reserved", "sensitive", "shaky", "envious", "jealous", "longing", "nostalgic", "pining", "wistful", "compassionate", "friendly", "loving", "open hearted", "sympathetic", "tender", "warm","absorbed", "alert", "curious", "engrossed", "enchanted", "entranced", "fascinated", "interested", "intrigued", "involved", "spellbound", "stimulated", "expectant", "encouraged", "optimistic", "empowered", "open", "proud", "safe", "secure", "amazed", "animated", "ardent", "aroused", "astonished", "dazzled", "eager","energetic", "enthusiastic", "giddy", "invigorated", "lively", "passionate", "surprised", "vibrant", "appreciative", "moved", "thankful", "touched", "amazed", "awed", "wonder", "amused", "delighted", "glad", "happy", "jubilant", "pleased", "tickled", "blissful", "ecstatic", "elated", "enthralled", "exuberant", "radiant", "rapturous", "thrilled", "calm", "clear headed", "comfortable", "centered", "content", "equanimous", "fulfilled", "mellow", "quiet", "relaxed", "relieved", "satisfied", "serene","still", "tranquil", "trusting", "enlivened", "rejuvenated", "renewed", "rested", "restored", "revived"];


function preload() {
//	img   = loadImage( "./assets/imagez/AEI_image_sculpture_500x250.jpg");
//	font1 = loadFont(  "./assets/fontz/computer_7.ttf");
//	font2 = loadFont(  "./assets/fontz/SpaceMono-Regular.ttf");
	
}


function setup() {

		
//	cnv = createCanvas (sizewidth, sizeheight);   removed for now
//			background(75,168,235); // sky blue I
      		background(147,200,228); // sky blue II
//          background (226,160,194)   // rose
	
//	imageMode(CENTER);  
//	cnv.parent('sketch-holder');  // relates the .js canvas to the HTML ID tag  removed for now
    
	

      feelingcount1= int(random (0,232));
      feelingcount2= int(random (0,232)); 	
      if (feelingcount1 == feelingcount2) { feelingcount2 = (random (0,232));} // checking for duplicates

      colorone0 = int(feelings[feelingcount1].charCodeAt(0));
      colorone1 = int(feelings[feelingcount1].charCodeAt(1));     
      colorone2 = int(feelings[feelingcount1].charCodeAt(2));
      
      colortwo0 = int(feelings[feelingcount2].charCodeAt(0));     
      colortwo1 = int(feelings[feelingcount2].charCodeAt(1));      
      colortwo2 = int(feelings[feelingcount2].charCodeAt(2));
	
      rgbone0 = int( map(colorone0, 97,122,rgblow,rgbhigh));
      rgbone1 = int( map(colorone1, 97,122,rgblow,rgbhigh));
      rgbone2 = int( map(colorone2, 97,122,rgblow,rgbhigh));      
      rgbtwo0 = int( map(colortwo0, 97,122,rgblow,rgbhigh));       
      rgbtwo1 = int( map(colortwo1, 97,122,rgblow,rgbhigh));       
      rgbtwo2 = int( map(colortwo2, 97,122,rgblow,rgbhigh));      
      

    
//    ::::::::::::::::::::::::::::::::::  
//    Insert Feelings Selected into HTML 
//    ::::::::::::::::::::::::::::::::::  
    
    
//    :::::::: Choice One :::::::
    feeling1_to_insert = document.createElement( "SPAN" );
    feeling1_to_insert.innerHTML = feelings[feelingcount1];
    
    container_block = document.getElementById( 'feeling-choice1' );
    container_block.appendChild( feeling1_to_insert ); 
    
    
//    :::::::: Choice Two :::::::
    feeling2_to_insert = document.createElement( "SPAN" );
    feeling2_to_insert.innerHTML = feelings[feelingcount2];
    
    container_block = document.getElementById( 'feeling-choice2' );
    container_block.appendChild( feeling2_to_insert ); 
    

    
//    :::::::::::::::
    
    
       textSize(t1-1);
	   textFont(font2);

	   textFont(font1);
	   textSize(t3);
	   fill(240);
	   text ("1. ", brdr+10, (st+t1+t2+t3+(sp*15)) );
	   text(feelings[feelingcount1], brdr+65,(st+t1+t2+t3+(sp*15)) );


	   text ("2. ", brdr+10, (st+t1+t2+(t3*2)+(sp*20)) );
	   text(feelings[feelingcount2], brdr+65,(st+t1+t2+(t3*2)+(sp*20)) );


}

//::::::::::::::::::::::::::::::::::::::::DRAW:::::::::::::::::::::::::::::::::::

function draw() {
	 
	image(img, 305, 140); // main image atop first page
	cursor(ARROW);
	
	var boxx1 = (brdr+10); 
	var boxy1 = ((st+t1+t2+(t3)+(sp*15))-t3);  // same y as the number, but subtracted by the font height.
	var boxw1 = 300;
	var boxh1 = t3*1.3;
	
	
		// 2 box ariables for clicking on choice two.
	var boxx2 = (brdr+10); 
	var boxy2 = ((st+t1+t2+(t3*2)+(sp*20))-t3);  // same y as the number, but subtracted by the font height.
	var boxw2 = 300;
	var boxh2 = t3*1.3;
	
	
//:::::::::::::::::::::::::::::::::::::::: 1 :::::::::::::::::::::::::::::::::::	
	
	if ((mouseX > boxx1) && (mouseX < boxx1 + boxw1) &&  // checking if the mouse is over the first emotion
	    (mouseY > boxy1) && (mouseY < boxy1 + boxh1) ) {
		
									cursor(HAND);
				if (mouseIsPressed){
									cursor(ARROW);
		
					
	background(bac);  // clear the screem
					


//::::::::::::::::: 1 print the color ellipses :::::::
		
	noStroke();
	ellipseMode(CORNER);
	fill(rgbone0, rgbone1, rgbone2);
	ellipse(positionx, positiony, HEAD_width,HEAD_height);

	fill(rgbone1, rgbone2, rgbone0);
	ellipse(positionx_b, positiony_b, HEART_width,HEART_height);

	fill(rgbone2, rgbone0, rgbone1);
	ellipse(positionx_c, positiony_c, ROOT_width, ROOT_height);
		
					
//::::::::::::::::::::1 Second Screen based on selection of emotion above
					
    textSize(t1-2);
	textFont(font1);

    fill(210);
	stroke(100);
			text("You selected: ", brdr, 45);
			text(feelings[feelingcount1], brdr+120, 45);

	  textFont(font2);
	  noStroke();
					
	  fill (80)    // Dropshadow
      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100+1);
      text("history since birth and thus feels the state of your intelligently emotional artificiality to be:", brdr+1, 130+1);
		
      fill(240); // return to main fill
      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100);
      text("history since birth and thus feels the state of your intelligently emotional artificiality to be:", brdr+1, 130);
		


//::::::::::::::::: 1 printing the color codes :::::::
		
			fill(150);
		    textSize(t1+2);
			textFont(font1);
			text("Head",110+1,listy+1); // dropshadow
		
			fill(rgbone0,rgbone1,rgbone2);
            text("Head",110,listy);
      		ellipse(70,listy-20,30,30);
      
      		fill(150);
			text("Heart",110+1,listy+43+1); // dropshadow
		
			fill(rgbone1, rgbone2,rgbone0);
      		text("Heart",110,listy+43);
      		ellipse(70,listy+20,30,30);
      
      		fill(150);
			text("Root", 110+1, listy+84+1); // dropshadow
		
			fill(rgbone2, rgbone0,rgbone1);
      		text("Root", 110, listy+84);
      		ellipse(70,listy+60,30,30);   

					
					
					textSize(t1-7);
	 				textFont(font2);
					fill(210);
					stroke(100);
					text("(reload the page to explore more)", 70, listy+150)

					
					noLoop();
				}
    }
		
//:::::::::::::::::::::::::::::::::::::::: 2 :::::::::::::::::::::::::::::::::::
	
	else if ((mouseX > boxx2) && (mouseX < boxx2 + boxw2) &&  // checking if the mouse is over the 2nd emotion
	          (mouseY > boxy2) && (mouseY < boxy2 + boxh2) ) {
		
									cursor(HAND);
				if (mouseIsPressed){
									cursor(ARROW);		
				
					
	background(bac);  // clear the screen
					

//::::::::::::::::: 2 Draw the color ellipses :::::::
		
	noStroke();
	ellipseMode(CORNER);

	fill(bac);
	rect(positionx, positiony, HEAD_width, HEAD_height);
	fill(rgbtwo0, rgbtwo1, rgbtwo2);
	ellipse(positionx, positiony, HEAD_width,HEAD_height);

	fill(rgbtwo1, rgbtwo2, rgbtwo0);
	ellipse(positionx_b, positiony_b, HEART_width,HEART_height);

	fill(rgbtwo2, rgbtwo0, rgbtwo1);
	ellipse(positionx_c, positiony_c, ROOT_width, ROOT_height);
					
					
					
//::::::::::::::::::::Second Screen 1 based on selection of emotion above  :::::::::

    textSize(t1-1);
	textFont(font1);

    fill(210);
	stroke(100);
			text("You selected: ", brdr, 45);
			text(feelings[feelingcount2], brdr+120, 45);

	  textFont(font2);
	  noStroke();
	  fill (80)    // Dropshadown
      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100+1);
      text("history since birth and thus feels the state of your artificially intelligent emotionality to be:", brdr+1, 130+1);

      fill(240); // return to main fill
      text("Thank you. Our deepest mind has ruminated on your selection in strict accordance with your surveillance", brdr+1, 100);
      text("history since birth and thus feels the state of your artificially intelligent emotionality to be:", brdr+1, 130);
	
		

//::::::::::::::::: 2 printing the color codes :::::::
		
			fill(150);
		    textSize(t1+2);
			textFont(font1);
			text("Head",110+1,listy+1); // dropshadow
		
			fill(rgbtwo0,rgbtwo1,rgbtwo2);
            text("Head",110,listy);
      		ellipse(70,listy-20,30,30);
      
      		fill(150);
			text("Heart",110+1,listy+43+1); // dropshadow
		
			fill(rgbtwo1, rgbtwo2,rgbtwo0);
      		text("Heart",110,listy+43);
      		ellipse(70,listy+20,30,30);
      
      		fill(150);
			text("Root", 110+1, listy+84+1); // dropshadow
		
			fill(rgbtwo2, rgbtwo0,rgbtwo1);
      		text("Root", 110, listy+84);
      		ellipse(70,listy+60,30,30);   
					
					
					textSize(t1-7);
	 				textFont(font2);
					fill(210);
					stroke(100);
					text("(reload the page to explore more)", 70, listy+150)
					

		 noLoop();
					
				}
		}
       
	}	




function myChoosing(thechoice){
    if(thechoice == 1){
  var queryString = "?" + feelings[feelingcount1];
  window.location.href = "./08-emotionally-intelligent-artifice-B.html" + queryString;
        } else  {
  var queryString = "?" + feelings[feelingcount2];
  window.location.href = "./08-emotionally-intelligent-artifice-B.html" + queryString;  
            
        }
}