// app.js
// Ponto de entrada principal da aplicação.

import { switchLanguage } from "./language.js";
import { toggleDarkMode, initializeTheme } from "./theme.js";

window.addEventListener("DOMContentLoaded", () => {
    switchLanguage("pt");

    document.getElementById("footer-year").textContent =
        `© ${new Date().getFullYear()} Marcelo Vianna Pacheco`;

    initializeTheme();

    document.getElementById("btn-pt").addEventListener("click", () => {
        switchLanguage("pt");
    });

    document.getElementById("btn-en").addEventListener("click", () => {
        switchLanguage("en");
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
        toggleDarkMode();
    });
});
