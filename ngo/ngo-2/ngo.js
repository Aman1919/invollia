let slideIndex = 1,
  n;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let menu = document.getElementById("menu-div");
let nav = document.getElementById("navlist");
let cross = document.getElementById("cross");
menu.addEventListener("click", () => {
  nav.style.display = "flex";
  menu.style.display = "none";
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  nav.style.display = "none";
  menu.style.display = "flex";
  cross.style.display = "none";
});
