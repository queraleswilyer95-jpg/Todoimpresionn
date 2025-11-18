const menu = document.querySelector(".menu");
const navbar = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

//Cierre automático al hacer clic en un enlace
const links = document.querySelectorAll(".nav-bar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

//Cierre al hacer clic fuera del menú
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target)) {
        navbar.classList.remove("active");
    }
});






