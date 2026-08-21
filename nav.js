document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.querySelector(".navtoggle");
    const navLinks = document.querySelector(".navlinks");

    if (!navToggle || !navLinks) {
        console.log("Navigasi tidak ditemukan");
        return;
    }

    navToggle.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Tutup menu ketika link diklik
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

});
