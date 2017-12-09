var posx = 10;
var posy = 10;
var astro_image;
var astro_data;
var crew = [];

function preload() {
	astro_image = loadImage("/images/astronaut_f_Naveen_Cs.png");
	loadJSON("http://api.open-notify.org/astros.json", gotdata);
}

function gotdata(data) {
	astro_data = data;
}

function setup() {
	createCanvas(windowWidth, windowHeight);

/*
	if (astro_data) {
		for (let i = 0; i < astro_data.number; i++) {
			crew.push(new Astronaut(
				random(20, windowWidth - 20),
				random(20, windowHeight - 20),
				astro_data.people[i].name,
				astro_data.people[i].craft));
		}
	}
*/
}

function draw() {
	background(0);
	noStroke();

	fill('rgba(255, 100, 255, 0.5)');
	rect(50, 50, 150, 100);

	translate(50,50);
	fill('rgba(100, 255, 255, 0.5)');
	rect(0, 0, 100, 150);

	translate(mouseX, mouseY);
	fill('rgba(200, 255, 255, 0.5)');
	ellipse(0,0, 200);
/*
	for (let i = 0; i < crew.length; i++) {	
		crew[i].update();
		crew[i].display();
	}
*/
}
