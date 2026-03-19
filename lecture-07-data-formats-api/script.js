console.log("Portfolio page loaded");

// Theme toggle
let isDark = false;

const button = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    isDark = true;
}

if (button) {
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
}

// Last updated
const lastUpdated = document.getElementById("last-updated");
const today = new Date().toISOString().split("T")[0];
if (lastUpdated) {
    lastUpdated.textContent = "Last updated: " + today;
}

/* External Data */

const loadBtn = document.getElementById("load-data-btn");
const statusText = document.getElementById("status");
const userDataDiv = document.getElementById("user-data");

if (loadBtn) {
    loadBtn.addEventListener("click", loadUserData);
}

async function loadUserData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";

    statusText.textContent = "Loading...";
    userDataDiv.innerHTML = "";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        statusText.textContent = "";

        userDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company.name}</p>
        `;
    } catch (error) {
        statusText.textContent = "Error loading data";
    }
}