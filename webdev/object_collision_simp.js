// Checking for intersection of objects for collision
// For a simple circle, if the distance between the two centers is 
// greater than the sum of the radii, they are not touching
// dist(x1, y1, x2, y2)

var b1;
var b2;

function setup() {
	createCanvas(800, 500);

	b1 = new Bubble(250, 200, 50, true);
	b2 = new Bubble(355, 200, 50, true);
}

function draw() {
	background(80);
	
	b1.update();
	b2.update();
	b1.display();
	b2.display();

	// check for collisions
	if (b1.intersects(b2)) {
		b1.changeColor();
		b2.changeColor();
	}
}
