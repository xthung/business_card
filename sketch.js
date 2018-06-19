// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
  createCanvas(720, 400);
  background(255);
  noStroke();
  createCanvas(720, 400);
  background(255);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  for (var i = 0; i < 15; i++) {
    fill(from);
    quad(random(-40, 220), random(height),
         random(-40, 220), random(height),
         random(-40, 220), random(height),
        random(-40, 220), random(height));
    fill(c1);
    quad(random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height), 
         random(140, 380), random(height));
    fill(c2);
    quad(random(320, 580), random(height), 
         random(320, 580), random(height),
         random(320, 580), random(height), 
         random(320, 580), random(height));
    fill(to);
    quad(random(500, 760), random(height), 
         random(500, 760), random(height),
         random(500, 760), random(height), 
         random(500, 760), random(height));
  }
  frameRate(5);


	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(128, 0, 0);
	textSize(fontSizeA);
	text("Wanna Ent.", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(8, 37, 103);
	textSize(fontSizeNorm);
	text("Elva Hung", padXmin+bleedPadW, padYmax*0.55);
	fill(255, 204, 0); // note color values - try to improve with cymk-style colors
	text("CEO of Wanna Ent.", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(80, 0, 184); // note 4th value is alpha (transparency)
	text("P: 0912345678", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(98, 91, 87);
	text("E: krystal861020@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(32, 178, 170);
	text("W: wanna.ent.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));


  function draw() {
  
}


}