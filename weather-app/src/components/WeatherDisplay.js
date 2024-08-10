import React from 'react';

function WeatherDisplay({ weather }) {
    if (!weather) return <div>Loading...</div>;

    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;
