var on = false;

function setup() {
	createCanvas(1000,600);
}

function draw() {
	if (on) {
		background(255, 255, 0);
	} else {
		background(0);
	}
}

function mousePressed() {
	if (!on) {
		on = true;
	} else {
		on = false;
	}
}

/* 
function draw() {
	background(80);

	if (mouseIsPressed) {
		background(0, 255, 0);
	}

	stroke(80, 20, 80);
	strokeWeight(4);
	noFill;

	if (mouseX > 250 && mouseX < 350) {
		fill(255, 0, 200);
	}

	rectMode(CENTER);
	rect(300, 200, 100, 100);
}
*/
