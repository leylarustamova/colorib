const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".item");
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

buttons.forEach(button => {
  button.addEventListener("click", () => {
   
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});





menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

