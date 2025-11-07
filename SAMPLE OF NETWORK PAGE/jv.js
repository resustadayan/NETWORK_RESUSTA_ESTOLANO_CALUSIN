document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      navbar.classList.remove("active");
    });
  });
});
