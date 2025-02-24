gsap.registerPlugin(ScrollTrigger);

gsap.from(".gallery, .video-section, .srk-quotes, .birthday-message", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

//gifs//
let currentQuoteIndex = 0;
const quotes = document.querySelectorAll('.carousel-item');

function nextQuote() {
    quotes[currentQuoteIndex].classList.remove('active');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add('active');
}

gsap.registerPlugin(ScrollTrigger);
gsap.from(".srk-quotes", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
