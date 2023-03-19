// HAMBURGUER MENÚ
const themeSwitch = document.getElementById("theme-switch");
const themeBody = document.getElementById("theme-body");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    themeBody.classList.add("dark-mode");
  } else {
    themeBody.classList.remove("dark-mode");
  }
});


// const toggleThemeBtn = document.getElementById('toggle-theme-btn');
// const bodyEl = document.body;

// toggleThemeBtn.addEventListener('click', () => {
//   bodyEl.classList.toggle('dark-mode');
// });


const hamburger = document.querySelector(".hamburgerMenu")
const navMenu = document.querySelector(".menuList")

hamburger.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");

})
