
var circle = {
	x : 100,
	y : 100,
	diameter : 50,
};

r = 180;
g = 50;
b = 255;

function setup() {
	createCanvas(1000, 800);
	background(r,g,b);
}

function draw() {
	fill(250, 200, 200);
	ellipse( circle.x, circle.y, circle.diameter, circle.diameter );
}
