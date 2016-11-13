var slideNum = 1;
slideShow(slideNum);

function arrowShow(n) {
	slideShow(slideNum += n);
}
function currentSlide(n) {
	slideShow(slideNum = n);
}
function slideShow(n) {
	var slides = document.getElementsByClassName("slides");
	var dot = document.getElementsByClassName("dot");
	if(n < 1) {
		slideNum = slides.length;
	}
	if(n > slides.length) {
		slideNum = 1;
	}
	for(var i=0;i<slides.length;i++) {
		slides[i].style.display = "none";
	}
	for(var i=0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(" active","");
	}
	console.log(slideNum);
	slides[slideNum-1].style.display = "block";
	dot[slideNum-1].className += " active";
}

