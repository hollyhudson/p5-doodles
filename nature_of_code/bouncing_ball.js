/* Bouncing Ball, from http://natureofcode.com/book/introduction/ */

function setup() {
	createCanvas(1000,600);
	background(80, 80, 80);
	ball = new Ball();
}

function draw() {
	background(80, 80, 80);
	ball.move();
	ball.display();	
}

// class definition
function Ball() {
	this.pos = createVector(width/2, height/2);
	
	this.display = function() {
		noStroke();
		fill(200,150,250);
		ellipse(this.pos.x,this.pos.y, 48, 48);
	}

	this.move = function() {

		this.vel = createVector(random(-5,5), random(-5,5));
		this.pos = this.pos.add(this.vel);

		//this.pos.x = this.pos.x + random(-5,5);
		//this.pos.y = this.pos.y + random(-5,5);
	}
}
