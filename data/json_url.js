let posx = 10;
let posy = 10;
let astronaut;
let astro_num;

function preload() {
	astronaut = loadImage("/images/astronaut_f_Naveen_Cs.png");
	loadJSON("http://api.open-notify.org/astros.json", gotdata);
}

function gotdata(data) {
	astro_num = data.number;
}

function setup() {
	createCanvas(800, 400);
	scale(.1);
	for (let i = 0; i < astro_num; i++) {
		image(astronaut, posx, posy);
		posx += 700;
	}
}

function draw() {
}
