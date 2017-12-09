//function Astronaut(posX, posY, name, ship, astro_image) {
function Astronaut(posX, posY, name, ship) {
	this.x = posX;
	this.y = posY;
	this.name = name;
	this.ship = ship;
	//this.astro_image = astro_image;
	let x_dir = Math.floor((Math.random() * 1) -1);
	let y_dir = Math.floor((Math.random() * 1) -1);

	this.display = function() {
		//color(0);
		//text(name, this.x, this.y+10);
		//text(ship, this.x, this.y+20);
		scale(.1);
		image(astro_image, this.x, this.y)
	}

	this.update = function() {
		console.log(x_dir);
		// float randomly
		if (parseInt(random(30)) == 0) {
			x_dir *= Math.floor((Math.random() * 1) -1); // change direction
		}

		if (parseInt(random(30)) == 0) {
			y_dir *= Math.floor((Math.random() * 1) -1); // change direction
		}

		this.x += x_dir;
		this.y += y_dir;
	}
}
