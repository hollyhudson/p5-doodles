var posx = 10;
var posy = 10;
var astro_image;
var astro_data;
var crew = [];

function preload() {
	astro_image = loadImage("/images/astronaut_f_Naveen_Cs_notext.png");
	loadJSON("http://api.open-notify.org/astros.json", gotdata);
}

function gotdata(data) {
	astro_data = data
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	if (astro_data) {
		for (let i = 0; i < astro_data.number; i++) {
			crew.push(new Astronaut(
				random(20, windowWidth - 20),
				random(20, windowHeight - 20),
				astro_data.name,
				astro_data.craft));
				//astro_image));	
		}
	}
}

function draw() {
	background(255);
	for (let i = 0; i < crew.length; i++) {	
		crew[i].update();
		crew[i].display();
	}
}
