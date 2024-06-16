document.addEventListener("DOMContentLoaded", () => {
    const enElements = document.querySelectorAll("[data-en]");
    const frElements = document.querySelectorAll("[data-fr]");
    const languageSwitcher = document.querySelector(".language-switcher");
    const flagElements = document.querySelectorAll(".flag");

    languageSwitcher.addEventListener("click", (event) => {
        if (event.target.classList.contains("flag")) {
            const language = event.target.id;

            if (language === "en") {
                translateToEnglish();
            } else if (language === "fr") {
                translateToFrench();
            }
        }
    });

    function translateToEnglish() {
        enElements.forEach(el => {
            el.innerHTML = el.getAttribute("data-en");
        });
    }

    function translateToFrench() {
        enElements.forEach(el => {
            el.innerHTML = el.getAttribute("data-fr");
        });
    }

    // Set initial language to English
    translateToEnglish();
});
