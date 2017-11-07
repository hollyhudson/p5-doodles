var dropzone;

function setup() {
	createCanvas(200,200);
	background(0);

	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(got_file, unhighlight);

}

function highlight() {
	console.log("in highlight");
	dropzone.style('background-color', '#eecc88');
}

function unhighlight() {
	console.log("in UNhighlight");
	dropzone.style('background-color', '#fff');
}

function got_file(file) {
	createP(file.name);
	createP(file.type);
	createP(file.size);
	createImg(file.data);
}

function draw() {
}
