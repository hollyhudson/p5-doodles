
function setup() {
	createCanvas(800,500);
	xcenter = width/2;
	ycenter = height/2;

	x = xcenter - 200;
	y = ycenter - 200;

	dir = 1;
	size = 400;

	noFill();
	frameRate(20);
}

function draw() {
	background(255, 200, 250, 50);
	rect(x, y, size, size);

	//  set up next box

	x = x + (dir*30);
	y = y + (dir*30);
	size =  size + ((-1)*dir*60)
	
	if (x > xcenter - 30) {
		dir = -1;
	} else if (x < xcenter - 200) {
		dir = 1;	
	}

}
