const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-es][data-en]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const root = document.documentElement;

function setLanguage(lang) {
    const safeLang = lang === "en" ? "en" : "es";

    translatableElements.forEach((element) => {
        element.textContent = element.dataset[safeLang];
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === safeLang);
    });

    root.lang = safeLang;
    localStorage.setItem("portfolio-language", safeLang);
}

function closeMenu() {
    if (!navLinks || !menuToggle) {
        return;
    }

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

function animateIntegrationFlow() {
    let shift = 0;

    function draw() {
        shift = (shift - 0.45) % 34;
        root.style.setProperty("--flow-shift", shift.toFixed(2));
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

setLanguage(localStorage.getItem("portfolio-language") || "es");
animateIntegrationFlow();
