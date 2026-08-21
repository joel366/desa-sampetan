document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.querySelector(".navtoggle");
    const navLinks = document.querySelector(".navlinks");

    if (!navToggle || !navLinks) {
        console.log("Navigation tidak ditemukan");
        return;
    }

    navToggle.setAttribute("aria-expanded", "false");

    navToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });

    });

});
