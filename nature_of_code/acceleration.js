/*  from http://natureofcode.com/book/introduction/ 
	Calculating acceleration in different ways.
	Multiplying vectors.
*/

function setup() {
	createCanvas(1000,600);
	background(80, 80, 80);
	ball = new Ball();
}

function draw() {
	background(80, 80, 80);
	ball.update();
	ball.display();	
}

// class definition
function Ball() {
	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0, 0);
	
	this.update = function() {
		this.acc = createVector(random(-1,1), random(-1,1));
		this.acc.mult(0.1); // changes magnitude, lower is slower

		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	
	this.display = function() {
		noStroke();
		fill(200,150,250);
		ellipse(this.pos.x,this.pos.y, 48, 48);
	}
}
