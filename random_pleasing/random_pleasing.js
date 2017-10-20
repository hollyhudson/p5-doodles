/* Reimplementation in p5.js by Holly Hudson
   Prior version in processing by Trammell Hudson

 Preamble from the source:

 * CM-2 random and pleasing simulator.
 *
 * Each cube has 20 slots with 1" spacing, 8 LEDs, 4 I/O, 8 LEDs.
 * Each LED board has 32 vertical LEDs with 0.5" spacing.
 * Reference photo: https://www.flickr.com/photos/osr/32907925763/in/album-72157680241484140/
 * Description from Dan Aronson:

Cliff lasser did the version for the cm1, I did the version for the cm2.
No communication. During the microprocessor idle loop there was code to
step through memory and then send the bitwise or of the memory for each
processor on the chip to the led. All random and pleasing did for the cm2
was to zero out all memory and them randomize each bit of memory (1 or 0)
in the memory for processor 0 on each chip (and the idle loop would take
care of the rest).

Pretty sure that p was 50% when I first adapted this, I would try t between
100 and 250 milliseconds.
*/

var cubes = [];
var threshold = 0.40; 	// number to have on
var threshold_slider;
var threshold_text;
var led_fade = 0.1; 	// low fade by default
var fade_slider;
var fade_text;
var led_dt = 100; 		// dan suggests between 4 and 10 Hz, tamiko suggests faster
var led_dt_slider;
var led_dt_text;

var t;
var x_spacing = 25.4;
var y_spacing = 15.8;
var led_diameter = 11;
var cube_size = (20 + 2 * 4) * x_spacing;

var space;

function setup() {
	space = createP('');
	threshold_slider = createSlider(0, 10, threshold * 10); 
	threshold_text = createElement('span', '"  threshold: " + threshold_slider.value()/10');

	createP("");

	fade_slider = createSlider(0, 10, led_fade * 10); 
	fade_text = createElement('span', '"  fade: " + fade_slider.value()/10');

	createP("");
	
	createCanvas(600,600);
	for (i = 0; i < 4; i++) {
		cubes[i] = new Cube();
	}
	
}

function draw() {
	background(0);
	threshold_text.html("threshold: " + threshold_slider.value()/10);
	fade_text.html("fade: " + fade_slider.value()/10);
	//led_dt_text.html("dt: " + led_dt_slider.value());

/*
	var now = millis();
	if (now - last_update > led_dt) {
		last_update = now;
			
	}
*/

	scale(0.33);
	translate(225,225);
	
	for	(var x = 0; x < 2; x++) {
		for	(var y = 0; y < 2; y++) {
			push();
			translate(x * cube_size * 1.2, y * cube_size * 1.2);
			cubes[x * 2 + y].display();
			pop();
		}
	}
}
