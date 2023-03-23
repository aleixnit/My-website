// DARK THEME / LIGHT THEME ------------------------------------------------------------------------------------------
const themeSwitch = document.getElementById("theme-switch");
const themeBody = document.getElementById("theme-body");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    themeBody.classList.add("dark-mode");
  } else {
    themeBody.classList.remove("dark-mode");
  }
});

// HAMBURGUER MENU -----------------------------------------------------------------------------------------------------
const hamburger = document.querySelector(".hamburgerMenu")
const navMenu = document.querySelector(".menuList")

hamburger.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");

})

//CARRUSEL DE IMAGENES

