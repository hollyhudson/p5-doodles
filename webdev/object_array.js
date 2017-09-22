// Make each new bubble appear at mouseX and mouseY

var bubble_num = 10;
var bubbles = [];

// constructor:
function Bubble() {
	this.x = random(50, width - 50),
	this.y = random(50, height - 50),
	this.display = function() {
		stroke(100, 210, 255);
		fill(50, 180, 255, 80);
		ellipse(this.x, this.y, 24, 24);
	}

	this.move = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
}

function setup() {
	createCanvas(800, 500);
	for (var i = 0; i < bubble_num; i++) {
		// the keyword "new" means use the constructor
		bubbles[i] = new Bubble();
	}
}

function draw() {
	background(80);
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].display();
	}
}

function mousePressed() {
	bubbles.push(new Bubble());
}
