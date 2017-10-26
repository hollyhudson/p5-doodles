// Here's a more complex example to play with css with p5.js

var canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0); 			// put the canvas at the top
	canvas.style('z-index', '-1'); 	// put it behind the page content
}

function draw() {
	background(200);
}
