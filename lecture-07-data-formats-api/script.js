// Theme toggle
const button = document.getElementById("theme-toggle");
const body = document.body;

let isDark = false;

button.addEventListener("click", () => {
    isDark = !isDark;

    body.classList.toggle("dark");
});

// Last updated
document.getElementById("last-updated").textContent =
    "Last updated: " + new Date().toLocaleDateString();