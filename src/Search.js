import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [city, setCity] = useState(" ");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=df00ce6442112c0f15afa927a09d9e5a`;
    axios.get(url).then(showWeather);
  }

  function newCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="Search" placeholder="Type city here" onChange={newCity} />
      <button type="button" class="btn btn-primary">Search</button>
    </form>
  );
  if (result) {
    return (
      <div class="Temperature">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey="df00ce6442112c0f15afa927a09d9e5a";
    let city="New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleSubmit);
    return form;
  }
}
