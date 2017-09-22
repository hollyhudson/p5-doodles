// Make each new bubble appear at mouseX and mouseY

var bubble_num = 10;
var bubbles = [];

function setup() {
	createCanvas(800, 500);
	for (var i = 0; i < bubble_num; i++) {
		// the keyword "new" means use the constructor
		bubbles[i] = new Bubble(random(width), random(height), 24);
	}
}

function draw() {
	background(80);
	if (bubbles.length > 50) {
		var extras = bubbles.length - 50;
		for (var i = 0; i < extras; i++) {
			bubbles.splice(0,1);
		}
	}

	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].display();
	}
}

function mousePressed() {
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked();
	}
}

function mouseDragged() {
	bubbles.push(new Bubble(mouseX, mouseY, 24));
}
