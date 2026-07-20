// theme.js
// Responsável exclusivamente pelo tema claro/escuro e persistência da preferência.

export function setTheme(theme) {
    const html = document.documentElement;
    const icon = document.getElementById("theme-icon");

    if (theme === "dark") {
        html.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        html.classList.remove("dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    localStorage.setItem("theme", theme);
}

export function toggleDarkMode() {
    const dark = document.documentElement.classList.contains("dark");
    setTheme(dark ? "light" : "dark");
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
        return;
    }

    setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
}
