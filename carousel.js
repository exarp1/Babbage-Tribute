// Automatic Slideshow - changes the image every 3 seconds.

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("babbageSlides");

  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }

  slides[myIndex - 1].style.display = "block";

  setTimeout(carousel, 5000);
}

