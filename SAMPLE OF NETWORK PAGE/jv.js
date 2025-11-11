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


let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const cards = document.querySelectorAll('.officer-card');
  const cardWidth = cards[0].offsetWidth + 10; 
  const totalCards = cards.length;

  currentIndex += direction;


  let visibleCards = 3;
  if (window.innerWidth <= 768) visibleCards = 2;
  if (window.innerWidth <= 600) visibleCards = 1;

  if (currentIndex < 0) currentIndex = totalCards - visibleCards;
  if (currentIndex > totalCards - visibleCards) currentIndex = 0;

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


setInterval(() => moveSlide(1), 5000);


window.addEventListener('resize', () => {
  currentIndex = 0;
  document.getElementById('slider').style.transform = 'translateX(0)';
});

document.getElementById('joinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const year = document.getElementById('year').value;
            
            if (name && email && year) {
                alert(`Thank you, ${name}! We've received your application. We'll contact you at ${email}.`);
                document.getElementById('joinForm').reset();
            }
        });

function showOfficerDetails(element) {
  const card = element.closest('.officer-card');
  const name = card.getAttribute('data-name');
  const age = card.getAttribute('data-age');
  const position = card.getAttribute('data-position');
  const social = card.getAttribute('data-social');

  document.getElementById('modalName').textContent = name;
  document.getElementById('modalAge').textContent = age;
  document.getElementById('modalPosition').textContent = position;
  document.getElementById('modalSocial').href = social;

  document.getElementById('officerModal').style.display = 'flex';
}

function closeOfficerModal() {
  document.getElementById('officerModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('officerModal');
  if (event.target === modal) modal.style.display = 'none';
};

function showOfficerDetails(imgElement) {
  const card = imgElement.closest('.officer-card');
  const name = card.dataset.name;
  const age = card.dataset.age;
  const position = card.dataset.position;
  const social = card.dataset.social;
  const imageSrc = imgElement.src;

  document.getElementById('modalName').textContent = name;
  document.getElementById('modalAge').textContent = age;
  document.getElementById('modalPosition').textContent = position;
  document.getElementById('modalSocial').href = social;
  document.getElementById('modalImage').src = imageSrc;

  document.getElementById('officerModal').style.display = 'flex';
}

function closeOfficerModal() {
  document.getElementById('officerModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('officerModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}