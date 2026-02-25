const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const button = document.getElementById("click-btn");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

button.addEventListener("click", () => {
    alert("Welcome to ModernSite! 🚀");
});
