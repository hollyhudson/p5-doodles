function LEDarray() {
	this.num_x = 8;
	this.num_y = 32;
	
	// initialize bright matrix
	this.bright = [];
	for (var i = 0; i < this.num_y; i++) {
		this.bright[i] = [];
	}
	
	// initialize leds matrix
	this.leds = [];
	for (var i = 0; i < this.num_y; i++) {
		this.leds[i] = [];
	}
	
	this.update = function() {
		for (var x = 0; x < this.num_x; x++) {
			for (var y = 0; y < this.num_y; y++) {
				var r = random(1.0);
				if (r > threshold_slider.value()/10) {
					// this pixel is off, fade it out
					this.leds[x][y] = false;
				} else {
					// this pixel is now on
					this.leds[x][y] = true;
				}
			}
		}
	}

	this.display = function() {
		fill(255,0,0);
		noStroke();

		for (var x = 0; x < this.num_x; x++) {
			for (var y = 0; y < this.num_y; y++) {
				// fade out if the pixel is off, ramp up when they come on
				if(!this.leds[x][y]) {
					this.bright[x][y] *= fade_slider.value()/10;
				} else {
					// bright[x][y] += 0.6; 	// ramp up
					this.bright[x][y] = 1.0; 		// immediate on
				}

				// draw all the LEDs
				fill(255 * this.bright[x][y], 0, 0);
				ellipse(x * x_spacing, 
						y * y_spacing, 
						led_diameter, 
						led_diameter);
			}
		}
	}
}
