const menu = document.querySelector(".menu");
const navBtn = document.querySelector(".navBtn");
navBtn.addEventListener("click", () => {
    menu.classList.toggle("navShow");
})