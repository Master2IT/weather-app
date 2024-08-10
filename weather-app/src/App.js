import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import { useWeather } from './hooks/useWeather';

function App() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }, []);

    const weather = useWeather(location);

    if (!location || !weather) return <div>Loading...</div>;

    return (
        <div>
            <WeatherDisplay weather={weather} />
            <button onClick={() => window.updateWeatherSummary(`Weather in ${weather.name}: ${weather.main.temp}°C, ${weather.weather[0].description}`)}>Close App</button>
        </div>
    );
}

export default App;
