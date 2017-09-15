/* Random Walker, from http://natureofcode.com/book/introduction/ */

// class definition
function Walker() {
	this.x = width/2;	
	this.y = height/2;	
	
	// class methods: display() and step()
	// show the walker
	this.display = function() {
		stroke(200,150,250);
		point(this.x,this.y);
	}
	// have the walker take a step
	this.step = function() {

		/*
		// pick from 9 possible next postitions instead of just 4
		// var stepx = random() * (max - min) + min
		var stepx = (random() * (1 - (-1))) + (-1);
		var stepy = (random() * (1 - (-1))) + (-1);

		this.x += stepx;
		this.y += stepy;
		*/

		// pick a random direction
		var choice = random(1);
		if (choice < 0.25) {
			this.x = this.x + 3;
		} else if (choice < 0.5 ) {
			this.x = this.x - 3;
		} else if (choice < 0.75) {
			this.y = this.y + 3;
		} else {
			// this.y--; will give a line instead of stipple.
			this.y = this.y - 3;
		}
	}
}

var w;

function setup() {
	createCanvas(1000,600);
	w = new Walker();
	background(80, 80, 80);
	
}

function draw() {
	w.step();
	w.display();	
}
