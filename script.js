let slideIndex = 1; 

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Setează slideshow-ul să ruleze automat
function autoSlides() {
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
}


setInterval(autoSlides, 3000); // Schimbă slide-ul la fiecare 3 secunde

// Adaugă dublu click pentru a înlocui imaginile statice cu slideshow
document.getElementById("monitorizare-resurse").addEventListener("dblclick", function() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";  // Afișează toate imaginile
  }
  showSlides(slideIndex);  



