//function Astronaut(posX, posY, name, ship, astro_image) {
function Astronaut(posX, posY, name, ship) {
	this.x = posX;
	this.y = posY;
	this.name = name;
	this.ship = ship;
	//this.astro_image = astro_image;
	this.x_dir = random(-1,1);
	this.y_dir = random(-1,1);

	this.display = function() {
		color(0);
		text(name, this.x, this.y+10);
		text(ship, this.x, this.y+20);
		//scale(.1);
		//image(astro_image, this.x, this.y)
	}

	this.update = function() {
		// float randomly
		if (random(10) == 0) {
			this.x_dir *= -1; // change direction
		}
		if (random(10) == 0) {
			this.y_dir *= -1; // change direction
		}
		this.x += this.x_dir;
		this.y += this.y_dir;

	}
}
