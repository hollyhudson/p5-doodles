// Here's a more complex example to play with css with p5.js

var canvas;
var section_header_test;
var section_headers;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0); 			// put the canvas at the top
	canvas.style('z-index', '-1'); 	// put it behind the page content

	section_header_test = select('#test');
	//section_header_test.mouseOver(highlight);
	//section_header_test.mouseOut(unhighlight);

	section_headers = selectAll('.section');
	for (var i = 0; i < section_headers.length; i++) {
		section_headers[i].mouseOver(highlight);
		section_headers[i].mouseOut(unhighlight);
	}
	
}

function highlight() {
	this.style('color', '#F0F');
}

function unhighlight() {
	this.style('color', '#000');
}

function draw() {
	background(200);
}
