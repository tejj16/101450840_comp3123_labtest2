// components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');

  const API_KEY = 'f88706e325f3c08e7c3da20f13826762'; 

  useEffect(() => {
    // Fetch weather data when the component mounts or the city changes
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching the weather data', error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="weather-container">
      <Search setCity={setCity} />
      {weatherData ? (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No data available for "{city}". Please try another city.</p>
      )}
    </div>
  );
}

export default Weather;
