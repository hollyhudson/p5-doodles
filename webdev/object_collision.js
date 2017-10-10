// Checking for intersection of objects for collision
// For a simple circle, if the distance between the two centers is 
// greater than the sum of the radii, they are not touching
// dist(x1, y1, x2, y2)

// Make it more efficient, don't check both A==B and B==A

var bubble_num = 10;
var bubbles = [];

function setup() {
	createCanvas(800, 500);

	// start with a few random bubbles in place
	/*
	for (var i = 0; i < bubble_num; i++) {
		// the keyword "new" means use the constructor
		bubbles[i] = new Bubble(random(width), random(height), 24);
	}
	*/
}

function draw() {
	background(80);

	// purge any extra bubbles so we keep only 50
	if (bubbles.length > 50) {
		var extras = bubbles.length - 50;
		for (var i = 0; i < extras; i++) {
			bubbles.splice(0,1);
		}
	}
	
	// Add new bubbles randomly
	if (parseInt(random(20)) == 0) {
		bubbles.push(new Bubble(
			random(width), random(height), random(10, 30), false));
	}

	// You need to loop backwards when removing items from an array
	// or else you'll end up skipping the item after the one you deleted
	for (var i = bubbles.length - 1; i >= 0 ; i--) {
		bubbles[i].update();
		bubbles[i].display();
		bubbles[i].notTouching();

		//for (var j = 0; j < parseInt(bubbles.length/2) +1; j++) {
		for (var j = 0; j < bubbles.length; j++) {
/*
			if (bubbles[i] != bubbles[j]) { 
				if (bubbles[i].intersects(bubbles[j])) {
					bubbles[i].touching();
					//bubbles[j].touching();
				}
			}
*/
			if (bubbles[i] == bubbles[j])
				continue;
			if (!bubbles[i].intersects(bubbles[j]))
				continue;
			bubbles[i].touching();
		}
		
		if (bubbles[i].isFinished()) {
			bubbles.splice(i, 1);	
		}
	}
}

function mousePressed() {
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked();
	}
}

/*
function mouseMoved() {
	bubbles.push(new Bubble(mouseX, mouseY, random(8,24), true));
}
*/
