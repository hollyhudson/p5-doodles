// Location of flower
var x = 0;
var y = 200;
var xDirection = 1;
var yDirection = 1;
var aRotate = 0;
var aTranslate = 0;

function setup() {

	// create the canvas
	createCanvas(1000,600);

	// set colors
	fill(255,0,255, 127);
}

function draw() {
	// refresh the background for you'll get a smear instead of movement
	background(255, 240, 200);


	// flower
	translate(width/2 + x, height/2 + y); 	// (x, y) put in center of canvas
	rotate(aRotate += 0.05);

	noStroke();  	// no outline
	for (var i = 0; i < 12; i++) { 	// make 10 ellipses
		//ellipse(0, 30, 20, 80); 	// (x, y, width, height)
		ellipse(0, 30, 50, 200); 	// (x, y, width, height)
		rotate(PI/6); 	// 2(pi) radians is once around circle
	}	
	
	// increment or decrement coordinates of flower center
	//y = y + yDirection;
	//x = x + xDirection;

	// x = cos(angle) * radius,  var a will be angle
	// y = sin(angle) * radius
	x = cos(aTranslate) * 200;
	y = sin(aTranslate) * 200;	

	aTranslate -= 0.05;
	// change direction for translating
	/*
	if (x > 200) xDirection = -1;
	if (x < -200) xDirection = 1; 
	if (y > 200) yDirection = -1;
	if (y < -200) yDirection = 1;
	*/
}
