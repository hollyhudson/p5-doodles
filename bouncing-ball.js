
/* Implemented with vectors */
var loc;
var vel;

function setup() {
	loc = createVector(100,100);
	vel = createVector(2,3);

	// create the canvas
	createCanvas(1000,600);

	// set colors
	fill(255,0,255, 127);
}

function draw() {
	// refresh the background for you'll get a smear instead of movement
	background(255, 240, 200);

	loc.add(vel);

	if ((loc.x > width) || (loc.x < 0)) {
		vel.x = vel.x * -1;		
	}
	if ((loc.y > height) || (loc.y < 0)) {
		vel.y = vel.y * -1;		
	}
	
	// draw the circle in the new position
	stroke(0);
	fill(175, 30, 180);
	ellipse(loc.x,loc.y,16,16);  // (x,y,width,height)
}



/* Implemented without vectors */
/*
// Location of ball
var x = 100;
var y = 100;
// Velocity of ball
var xspeed = 1;
var yspeed = 3.3;

function setup() {

	// create the canvas
	createCanvas(1000,600);

	// set colors
	fill(255,0,255, 127);
}

function draw() {
	// refresh the background for you'll get a smear instead of movement
	background(255, 240, 200);

	// move the circle to new position "speed" distance from current position
	x = x + xspeed;
	y = y + yspeed;

	// if you hit a side wall, change direction
	if ((x > width) || (x < 0)) {
		xspeed = xspeed * -1;
	}
	// if you hit the top or bottom, change direction
	if ((y > height) || (y < 0)) {
		yspeed = yspeed * -1;
	}

}
*/
