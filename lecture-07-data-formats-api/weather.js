document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnKuopio");

    const cityEl = document.getElementById("city");
    const tempEl = document.getElementById("temperature");
    const windEl = document.getElementById("wind");
    const iconEl = document.getElementById("icon");

    btn.addEventListener("click", async () => {

        const url = "https://api.open-meteo.com/v1/forecast?latitude=62.8924&longitude=27.6780&current_weather=true";

        cityEl.textContent = "Loading...";
        iconEl.textContent = "-";

        try {
            const res = await fetch(url);
            const data = await res.json();

            const weather = data.current_weather;

            cityEl.textContent = "Kuopio";
            tempEl.textContent = weather.temperature + " °C";
            windEl.textContent = weather.windspeed + " km/h";

            // 🌤️ ICON LOGIC
            const code = weather.weathercode;

            if (code === 0) {
                iconEl.textContent = "☀️ Sunny";
            } 
            else if (code >= 1 && code <= 3) {
                iconEl.textContent = "⛅ Partly Cloudy";
            } 
            else if (code >= 45 && code <= 67) {
                iconEl.textContent = "☁️ Cloudy";
            } 
            else if (code >= 71 && code <= 82) {
                iconEl.textContent = "🌧 Rain";
            } 
            else {
                iconEl.textContent = "🌡 Weather";
            }

        } catch (error) {
            cityEl.textContent = "Error loading data";
            iconEl.textContent = "❌";
        }
    });

});