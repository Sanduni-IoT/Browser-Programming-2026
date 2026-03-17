console.log("Portfolio page loaded");

let isDarkMode = false;
let clickCount = 0;

const themeButton = document.getElementById("themeBtn");
const counterButton = document.getElementById("counterBtn");

function setTheme() {

    if (isDarkMode) {
        document.body.classList.remove("dark-mode");
        console.log("Light mode enabled");
    } else {
        document.body.classList.add("dark-mode");
        console.log("Dark mode enabled");
    }

    isDarkMode = !isDarkMode;
}

function countClicks() {
    clickCount++;
    console.log("Button clicked " + clickCount + " times");
}

themeButton.addEventListener("click", setTheme);
counterButton.addEventListener("click", countClicks);