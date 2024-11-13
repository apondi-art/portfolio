 // Hamburger menu functionality
 const hamburger = document.querySelector(".hamburger");
 const navLinks = document.querySelector(".nav-links");

 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navLinks.classList.toggle("active");
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navLinks.classList.remove("active");
 }));

 // Navbar scroll effect
 window.addEventListener('scroll', () => {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });