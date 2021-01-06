//hero animations
const heroAnimate = function() {
  const heroSection = document.querySelector(".hero");
  const heroContent = heroSection.querySelector(".hero-content");
  const heroImg = heroSection.querySelector(".hero-img-container");
  const sideText = heroSection.querySelector(".sideways-text");
  const header = document.querySelector("header");
  const heroTl = gsap.timeline();
  heroTl.from(heroSection, { opacity: 0, duration: 0.3 }),
    heroTl.from(heroImg, {
      x: "-110%",
      opacity: 0,
      duration: 1.3,
      ease: "power1.easeInOut"
    }),
    heroTl.from(heroContent, { opacity: 0, y: 100, duration: 1 }),
    heroTl.from(sideText, { opacity: 0, duration: 1 }),
    heroTl.from(
      header,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.easeInOut"
      },
      "-=.5"
    );
};

heroAnimate();
const fadeIn = function(element) {
  const img = element.querySelector(".card-img");
  const textContent = element.querySelector(".card-info");
  gsap.to(img, { opacity: 1, x: 0, duration: 1 });
  gsap.to(textContent, { opacity: 1, y: 0, duration: 1.3 });
};

const cards = document.querySelectorAll(".card");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.7) {
      fadeIn(entry.target);

      observer.unobserve(entry.target);
    } else {
      return;
    }
  });
}, options);

cards.forEach(card => {
  observer.observe(card);
});
