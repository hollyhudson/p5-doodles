function Cube() {
	this.a = new LEDarray();
	this.b = new LEDarray();

	this.upate = function() {
	}

	this.display = function() {
		fill(20,0,0);

		rect(-4 * x_spacing, 
			-4 * x_spacing, 
			(20 + 8) * x_spacing, 
			(20 + 8) * x_spacing);

		this.a.update();
		this.a.display();
	
		translate(12 * x_spacing, 0);
		
		this.b.update();
		this.b.display();
	}
}
