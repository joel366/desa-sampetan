document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".navtoggle");
    const navLinks = document.querySelector(".navlinks");

    if (!navToggle || !navLinks) {
        console.log("Navigasi tidak ditemukan");
        return;
    }

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");

        console.log("Menu:", navLinks.classList.contains("open"));

        navToggle.setAttribute(
            "aria-expanded",
            navLinks.classList.contains("open")
        );
    });
});
