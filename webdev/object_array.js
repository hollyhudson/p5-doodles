// Make each new bubble appear at mouseX and mouseY

var bubble_num = 10;
var bubbles = [];

function setup() {
	createCanvas(1200, 800);
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

	// You need to loop backwards when removing items from an array
	// or else you'll end up skipping the item after the one you deleted
	for (var i = bubbles.length - 1; i >= 0 ; i--) {
		bubbles[i].update();
		bubbles[i].display();
		if (bubbles[i].isFinished) {
			bubbles.splice(i, 1);	
		}
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
