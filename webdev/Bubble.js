// constructor:
function Bubble(posX, posY, radius, blue) {
	this.x = posX;
	this.y = posY;
	this.r = radius;
	this.blue = blue;
	this.rate_of_shrink = 0.2;    // lower is slower

	this.display = function() {
		if (this.blue == true) {
			stroke(100, 210, 255);
			fill(50, 180, 255, 80);
		} else {
			stroke(180, 180, 180);
			fill(150, 150, 150, 80);
		}

		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	this.updatePos = function() {
		// wiggle randomly
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);

		// shrink over time
		//this.r = this.r - this.rate_of_shrink;
	}

	this.intersects = function(other) {
		var d = dist(this.x, this.y, other.x, other.y);

		if (d < this.r + other.r) {
			return true;
		} else {
			return false;
		}
	}

	this.touching = function(other) {
		this.blue = true;
	}

	this.notTouching = function() {
		this.blue = false;
	}

	this.clicked = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r) {
			this.blue = true;	
		}
	}

	this.isFinished = function() {
		if (this.r <= 0) {
			return true;
		} else {
			return false;
		}
	}
}
