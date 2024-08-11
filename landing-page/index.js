document.getElementById('load-weather-app').addEventListener('click', function () {
    const script = document.createElement('script');
    script.src = "https://weather-app-api-46e47.web.app/static/js/main.js"; // Update this with the correct path
    document.body.appendChild(script);
});

function updateWeatherSummary(summary) {
    document.getElementById('weather-summary').textContent = summary;
}
