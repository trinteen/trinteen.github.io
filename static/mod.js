
const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
    document.querySelector("nav.menu").classList.toggle("hidden", !isMobile());
}

isMobileMenu();

document.querySelector(".menu-trigger").onclick = () => {
    const mobile_menu = document.querySelector("nav.menu");
    if(mobile_menu.classList.contains("hidden") == true) {
        mobile_menu.classList.remove("hidden");
    } else {
        mobile_menu.classList.add("hidden");
    }
}