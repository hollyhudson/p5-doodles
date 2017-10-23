var paragraph;
var sizeSlider;

function setup() {
	paragraph = createP("The quick brown fox jumped over the lazy dog.  Four score and 7 years ago.  Tomorrow, tomorrow and tomorrow, creeps in it's petty pace from day to day, to the last syllable of recorded time, and all our yesterdays have lighted fools the way to dusty death.  Out, out brief candle, life is but a walking shadow.  A poor player who struts and frets his hour upon the stage and is heard of no more.  It is a tale told by an idiot, full of sound and fury, signifying nothing.");	

	sizeSlider = createSlider(10, 64, 16);
	sizeSlider.input(updateSize);

}

function updateSize() {
	paragraph.style("font-size", sizeSlider.value() + "pt");
}

function draw() {
	
}
