const darkThemeVariables = {
    "--body-color": "#103351",
    "--dark-display": "block",
    "--light-display": "none",
    "--contrast-color": "#000000",
    "--hero-background": "url('../img/nightsky.png')",
    "--highlight-color": "#00ccff",
    "--primary-color": "#103351",
    "--secondary-color": "#ffffff",
    "--transparent-color": "rgba(255, 255, 255, 0.692)",
    "--container-background-color": "rgba(255, 255, 255, 0.068)",
    "--skill-title": "#ffffff",
};

const lighThemeVariables = {
    "--body-color": "#B1E3FF",
    "--dark-display": "none",
    "--light-display": "block",
    "--contrast-color": "#e9e9e9",
    "--hero-background": "url('../img/bluesky.png')",
    "--highlight-color": "#4f87b8",
    "--primary-color": "#ffffff",
    "--secondary-color": "#103351",
    "--transparent-color": "#1033519a",
    "--container-background-color": "rgba(255, 255, 255, 0.288)",
    "--skill-title": "#000000",
};

const lightFaviconUrl = "./src/img/favicon/light-favi.png";
const darkFaviconUrl = "./src/img/favicon/dark-favi.png";

const toggleThemeCheckbox = document.querySelector("#toggle-theme");

function toggleTheme(checked) {
    const favicon = document.querySelector('link[rel="icon"]');

    if (checked) {
        favicon.href = lightFaviconUrl;
        setCSSVariables(lighThemeVariables);
        return;
    }
    favicon.href = darkFaviconUrl;
    setCSSVariables(darkThemeVariables);
}

function setCSSVariables(variables) {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(variables)) {
        root.style.setProperty(key, value);
    }
}

toggleTheme(toggleThemeCheckbox.checked);
toggleThemeCheckbox.addEventListener("change", function () {
    toggleTheme(toggleThemeCheckbox.checked);
});
