
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(){
	showSlide(slideIndex+=1);
}

function minusSlide(){
	showSlide(slideIndex-=1);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n){
	var i;
	var slides = document.getElementsByClassName("slide");	
	var dots = document.getElementsByClassName("dots-item");
	if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display="none";
	}
	for ( i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active","");
	}
	slides[slideIndex-1].style.display ="block";
	dots[slideIndex - 1].className += " active";
}




var ImageIndex = 1;
showSlide2(ImageIndex);

function currentSlide2(m){
	showSlide2(ImageIndex = m);
}

function showSlide2(m){
	var i;
	var slides2 = document.getElementsByClassName("slide-img");
	var dots2 = document.getElementsByClassName("dots-item2");

	for (i = 0; i < slides2.length; i++) {
		slides2[i].style.display="none";
	}

	for (i = 0; i < dots2.length; i++) {
		dots2[i].className = dots2[i].className.replace(" active","")
	}

	slides2[ImageIndex-1].style.display="block";
	dots2[ImageIndex-1].className += " active";
}


