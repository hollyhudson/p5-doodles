var canvasWidth = 800;
var canvasHeight = 500;

var xcenter = canvasWidth/2;
var ycenter = canvasHeight/2;

var square = {
	x : xcenter - 200,
	y : ycenter - 200,
	size : 400,
	dir : 1,
};

var circle = {
	x : xcenter,
	y : ycenter,
	size : 40,
	dir : -1,
};


r = 255;
g = 200;
b = 250;

function setup() {
	createCanvas(canvasWidth,canvasHeight);
	noStroke();
	fill(255, 255, 255, 50);
	frameRate(10);
    
}

function draw() {
	background(r, g, b, 50);
	rect(square.x, square.y, square.size, square.size);
	ellipse(circle.x, circle.y, circle.size, circle.size);

	next_sized_square(square);
	next_sized_circle(circle);
}

function next_sized_square(shape) {
	shape.x = shape.x + (shape.dir*30);
	shape.y = shape.y + (shape.dir*30);
	shape.size =  shape.size + ((-1)*shape.dir*60)
	
	if (shape.x > xcenter - 30) {
		shape.dir = -1;
	} else if (shape.x < xcenter - 200) {
		shape.dir = 1;	
	}
}

function next_sized_circle(shape) {
	//shape.x = shape.x + (shape.dir*30);
	//shape.y = shape.y + (shape.dir*30);
	shape.size =  shape.size + ((-1)*shape.dir*60)

	if (shape.size > 400) {
		shape.dir = 1;
	} else if (shape.size < 70) {
		shape.dir = -1;	
	}

}

function mousePressed() {
    r = random(256);
    g = random(256);
    b = random(256);
}
