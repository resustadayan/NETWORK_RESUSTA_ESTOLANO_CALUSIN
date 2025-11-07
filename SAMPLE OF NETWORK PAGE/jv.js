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
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

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
  document.getElementById('slider').style.transform = 'translateX(0)';
});

document.getElementById('joinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const year = document.getElementById('year').value;
            
            // Simple validation
            if (name && email && year) {
                alert(`Thank you, ${name}! We've received your application. We'll contact you at ${email}.`);
                document.getElementById('joinForm').reset();
            }
        });