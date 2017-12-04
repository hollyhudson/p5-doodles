var dropzone;

function setup() {
	var c = createCanvas(200,200);
	background(0);

	dropzone = select('#dropzone');
	//dropzone.dragOver(highlight);
	//dropzone.dragLeave(unhighlight);
	dropzone.drop(got_file, unhighlight);
	c.drop(got_file, unhighlight);
	//c.drop(unhighlight, got_file);

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
	console.log("in got_file");
	createP(file.name);
	createP(file.type);
	createP(file.size);
	createImg(file.data);
}

function draw() {
}
