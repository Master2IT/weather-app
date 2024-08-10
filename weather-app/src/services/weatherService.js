const API_KEY = '869503d5f5412ebf5a7037e3d3ff783e';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(location) {
    const response = await fetch(`${BASE_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
}
