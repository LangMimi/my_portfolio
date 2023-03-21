const burgerBtn = document.querySelector(".nav-burger img");
const menu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".nav-menu img");

burgerBtn.addEventListener("click", () => {
    menu.classList.add("clicked");
    if (menu.classList.contains("clicked")) {
        document.body.style.overflow = "hidden";
    }
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("clicked");
    if (!menu.classList.contains("clicked")) {
        document.body.style.overflow = "visible";
    }
});

document.addEventListener("click", (e) => {
    if (e.target != menu && e.target != burgerBtn) {
        menu.classList.remove("clicked");
    }
    if (!menu.classList.contains("clicked")) {
        document.body.style.overflow = "visible";
    }
});
