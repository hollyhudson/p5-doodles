// Checking for intersection of objects for collision
// For a simple circle, if the distance between the two centers is 
// greater than the sum of the radii, they are not touching
// dist(x1, y1, x2, y2)

var bubbles_num = 10;
var bubbles = [];

function setup() {
	createCanvas(800, 500);

	// We won't create bubbles here because we want them all to 
	// generate randomly at random intervals

}

function draw() {
	background(80);

	// Create some new bubbles randomly
	if (parseInt(random(20)) == 0) {
		bubbles.push(new Bubble(
			random(width), random(height), random(10, 30), false));	
	}
	
	// check for collisions
	for (var i = bubbles.length - 1; i >= 0; i--) {
		// move and display each bubble
		bubbles[i].updatePos();
		bubbles[i].display();

		// set to touching only if it's still touching another
		bubbles[i].notTouching();
		for (var j = 0; j < bubbles.length; j++) {
			if (bubbles[i] == bubbles[j]) {
				continue;
			}
			if (!bubbles[i].intersects(bubbles[j])) {
				continue;
			}
			bubbles[i].touching();
		}
	}

	// Purge any extra bubbles so we keep only 50
	if (bubbles.length > bubbles_num) {
		// how many too many?
		var extras = bubbles.length - 50;
		for (var i = 0; i < extras; i++) {
			bubbles.splice(0, 1);
		}
	}
}
