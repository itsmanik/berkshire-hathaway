const toggle = document.getElementById("nav-toggle"),
    nav = document.getElementById("nav-menu");
    toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
});
