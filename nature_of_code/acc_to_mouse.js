/*  from http://natureofcode.com/book/introduction/ 
	Acceleration towards the mouse.
	Using: sub(), mag(), normalize()
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
		var mouse = createVector(mouseX, mouseY);
		
		// Just this will create a crazy result you need to scale it with mult
		this.acc = p5.Vector.sub(mouse, this.pos);
		this.acc = p5.Vector.sub(mouse, this.pos);
		this.acc.normalize();
		this.acc.mult(0.01);

		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	
	this.display = function() {
		noStroke();
		fill(200,150,250);
		ellipse(this.pos.x,this.pos.y, 48, 48);
	}
}
