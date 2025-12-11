document.querySelector(".btn").addEventListener("click", () => {
    alert("Gracias por explorar nuestra aventura ✈️🌴");
});
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje, te responderemos pronto 🌴✉️");
});

const miniCarousel = document.querySelector(".mini-carousel");

miniCarousel.addEventListener("mouseover", () => {
    miniCarousel.style.animationPlayState = "paused";
});

miniCarousel.addEventListener("mouseout", () => {
    miniCarousel.style.animationPlayState = "running";
});
