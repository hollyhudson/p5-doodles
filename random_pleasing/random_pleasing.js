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
var led_fade = 0.0; 	// no fade by default
var led_dt = 100; 		// dan suggests between 4 and 10 Hz, tamiko suggests faster

var t;
var x_spacing = 25.4/2;
var y_spacing = 15.8/2;
var led_diameter = 11/2;
var cube_size = (20 + 2 * 4) * x_spacing;

function setup() {
	createCanvas(700,550);
	for (i = 0; i < 4; i++) {
		cubes[i] = new Cube();
	}
}

function draw() {
	background(0);

	cubes[0].display();
/*	
	for	(var x = 0; x < 2; x++) {
		for	(var y = 0; y < 2; y++) {
			translate
		}
	}
*/
}
