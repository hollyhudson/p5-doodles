//var flakes = [];
var snow = [];

/*
// Load any media to make sure it's available for the sketch
function preload() {
	var flake = loadImage('images/snowflake0.png');	
	//flakes[1] = loadImage('images/snowflake1.png');	
	//flakes[2] = loadImage('images/snowflake2.png');	
}
*/

function setup() {
	createCanvas(600, 400);
}

/*
function mousePressed() {
	var flake = new Image(mouseX, mouseY, flakes[2]);
	snow.push(flake);
}
*/

function draw() {
	background(80);
	for (var i = 0; i < snow.length; i++) {
		snow[i].updatePos();
		snow[i].display();
	}
}
