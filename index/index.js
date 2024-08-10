function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}

document.getElementById('load-weather-app').addEventListener('click', function () {
    const script = document.createElement('script');
    script.src = "../weather-app/build/static/js/main.js"; // Update this with the correct path
    document.body.appendChild(script);
});

function updateWeatherSummary(summary) {
    document.getElementById('weather-summary').textContent = summary;
}
