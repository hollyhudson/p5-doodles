/* map one range of values onto another
 * so when you move the mouse from right to left it goes from white to black
 *
 * map takes 5 arguments:
 * map(value_to_mutate, valueMin, valueMax, map_to_Min, map_to_Max)
 */ 

var col = 0;
var canvasX = 1000;
var canvasY = 600;
var r = 0;
var b = 255;
var g = 0

var circle = {
	x: 100,
	y: 200,
	diameter: 50,
};

function setup() {
	createCanvas(canvasX, canvasY);
}

function draw() {
	r = map(mouseX, 0, canvasX, 0, 255);
	g = map(mouseY, 0, canvasY, 0, 255);
	b = map(mouseX, 0, canvasX, 255, 0);
	background(r, g, b);

	fill(250, 200, 200);
	ellipse(mouseX, mouseY, circle.diameter, circle.diameter);
}
