// constructor:
function Bubble(posX, posY, radius) {
	this.x = posX;
	this.y = posY;
	this.r = radius;
	this.col = 80;

	this.display = function() {
		stroke(100, 210, 255);
		fill(50, 180, 255, this.col);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	this.move = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	this.clicked = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r) {
			this.col = 255;	
		}
	}
}
