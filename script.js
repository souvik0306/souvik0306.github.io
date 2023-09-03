let slideIndex = 0;
let slides;
let autoSlideshow;

function showSlides() {
    slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    autoSlideshow = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function pauseOnHover() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener("mouseover", () => {
            clearTimeout(autoSlideshow);
        });
        slides[i].addEventListener("mouseout", () => {
            autoSlideshow = setTimeout(showSlides, 3000);
        });
    }
}

showSlides();
autoSlideshow = setTimeout(showSlides, 3000);
pauseOnHover();
