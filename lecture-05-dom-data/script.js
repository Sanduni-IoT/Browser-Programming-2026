console.log("Portfolio page loaded");

// Theme state
let isDark = false;

const button = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    isDark = true;
}

// Toggle theme
button.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        body.classList.add("dark");
        localStorage.setItem("portfolio_theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("portfolio_theme", "light");
    }
});

// Last updated date
const lastUpdated = document.getElementById("last-updated");
const today = new Date().toISOString().split("T")[0];

lastUpdated.textContent = "Last updated: " + today;