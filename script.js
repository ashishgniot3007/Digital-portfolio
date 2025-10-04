// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// OPTIONAL: GSAP / ScrollMagic animations
// Example GSAP fade-in
// gsap.from(".section", { opacity: 0, duration: 1, y: 50, stagger: 0.3 });
