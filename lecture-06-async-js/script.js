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


/* ================================
   External Data Demo
================================ */

const loadBtn = document.getElementById("load-data-btn");
const statusText = document.getElementById("status");
const userDataDiv = document.getElementById("user-data");

loadBtn.addEventListener("click", loadUserData);

async function loadUserData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";

    statusText.textContent = "Loading...";
    userDataDiv.innerHTML = "";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
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
        console.error("Error:", error);
    }
}

/*
Why do we use async/await?
- It allows us to write asynchronous code in a clean and readable way instead of chaining promises.

Why do we check response.ok?
- It ensures the HTTP request was successful (status 200–299). If not, we can handle errors properly.

Why do we use try/catch?
- It helps catch runtime errors (network issues, failed requests) and prevents the app from crashing.
*/