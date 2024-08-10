import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

export function useWeather(location) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (location) {
            getWeatherData(location)
                .then(data => setWeather(data))
                .catch(error => console.error(error));
        }
    }, [location]);

    return weather;
}
