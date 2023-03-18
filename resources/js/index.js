// HAMBURGUER MENÚ
const hamburger = document.querySelector(".hamburgerMenu")
const navMenu = document.querySelector(".menuList")

hamburger.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");

})