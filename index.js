let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let slides = document.querySelector(".slides")
let slideImages = document.querySelectorAll(".slide")

let index = 0;
let showSlides = (i) => {
    if (i < 0) { index = slideImages.length - 1 }
    else if (i >= slideImages.length) {
        index = 0;
    }
    else {
        index = i;
    }
    slides.style.transform = `translateX(-${index * 31}rem)`;
}





next.addEventListener("click", () => showSlides(index + 1));
prev.addEventListener("click", () => showSlides(index - 1));
