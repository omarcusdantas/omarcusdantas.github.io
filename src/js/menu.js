let nav, menu, menuButton, notMenu;
const timeMenuAnimationMs = 250;

function toggleMenuHeight() {
    menu.classList.toggle("menu-height");
}

function toggleNav() {
    nav.classList.toggle("show");
}

function disableMenu() {
    toggleMenuHeight();
    setTimeout(toggleNav, timeMenuAnimationMs);
    notMenu.removeEventListener("click", disableMenu);
}

function setDisableMenuEventHandler() {
    notMenu.addEventListener("click", disableMenu);
}

function setHamburgerMenu() {
    menuButton.addEventListener("click", function () {
        if (nav.classList.contains("show")) {
            disableMenu();
            return;
        }
        toggleNav();
        setTimeout(toggleMenuHeight, 1);
        setTimeout(setDisableMenuEventHandler, timeMenuAnimationMs);
    });
}

window.addEventListener("load", () => {
    nav = document.querySelector("nav");
    menu = document.querySelector("nav ul");
    menuButton = document.querySelector(".hamburger-menu");
    notMenu = document.querySelector("body");

    setHamburgerMenu();
});
