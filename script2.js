//*********************** Slideshow ************************//
//billeder
let slideIndex = 1;
showSlides(slideIndex);

// pile kontroller
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// dutter
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// let giver dig mulighed for variabler
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // Gør så billederne køre i ring, ikke bare stopper efter billede 4
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Ved ikke hvad gør
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Gør så billederne ikke kommer nedenunder hinanden, men kommer efter hinanden
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Dutternes farver føler med iforhold til hvilket billede der er blevet klikket på
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Billederne
  slides[slideIndex - 1].style.display = "block";
  // Dutterne
  dots[slideIndex - 1].className += " active";
}
//*********************** Burgermenu ************************//

//Når man klikker på menu kommer nav op med alle punkterne //
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
// opretter variabel minRand
let minRand;
