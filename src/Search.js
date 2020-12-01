import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  function handleResponse
}
  
  const apiKey ="df00ce6442112c0f15afa927a09d9e5a";
  let city="New York";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
    return(
     <div className="Search">
     <form>
       <div className="row">
         <div className="col-9">
         <input 
         type="Search" 
         placeholder="Type city here" 
         className="form-control" 
         autofocus="on" />
      <button type="button" class="btn btn-primary">Search</button></div>
       </div>
    </form>
     </div> 
    )


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

  