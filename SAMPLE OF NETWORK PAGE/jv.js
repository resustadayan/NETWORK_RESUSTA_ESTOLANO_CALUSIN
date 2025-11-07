// --- Navigation Smooth Scroll and Menu Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
      
      // Close mobile menu after clicking a link
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.remove("active");
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// --- Slider Functionality ---
let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const cards = document.querySelectorAll('.officer-card');
  
  if (cards.length === 0) return;
  
  const cardWidth = cards[0].offsetWidth + 30; // includes margin
  const totalCards = cards.length;

  currentIndex += direction;

  // show 3 cards on desktop, 2 on tablet, 1 on mobile
  let visibleCards = 3;
  if (window.innerWidth <= 768) visibleCards = 2;
  if (window.innerWidth <= 600) visibleCards = 1;

  if (currentIndex < 0) currentIndex = totalCards - visibleCards;
  if (currentIndex > totalCards - visibleCards) currentIndex = 0;

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Recalculate on resize
window.addEventListener('resize', () => {
  currentIndex = 0;
  const slider = document.getElementById('slider');
  if (slider) {
    slider.style.transform = 'translateX(0)';
  }
});