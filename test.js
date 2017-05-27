
function setup() {
	createCanvas(1000,600);
}

function draw() {
	//rect(10,10,20,20);
	for(x = 10; x < 980; x += 20){
		for(y = 10; y < 580; y += 20){
			rect(x, y, 10, 10);
		}
	}

}
