let flower;
let antarctic_birds;
let birds;

function preload() {
	flower = loadJSON("data/flowers.json");
	antarctic_birds = loadJSON("data/birds.json");
}

function setup() {
	//createCanvas(400,400);
	noCanvas();
	birds = antarctic_birds.birds;

	// list all the families
	for (let i = 0; i < birds.length; i++) {
		createElement('h1', birds[i].family);
	}
}

function draw() {
	/*
	background(0);
	fill(flower.r, flower.g, flower.b);
	text(flower.name, 10, 50);
	text(antarctic_birds.birds[1].members[2], 30, 80);
	*/

}
