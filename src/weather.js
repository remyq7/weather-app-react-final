import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner'

export default function Weather(props){
    function handleResponse(response){
        alert (`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiKey = "df00ce6442112c0f15afa927a09d9e5a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
    return <Loader 
    type="TailSpin" 
    color="#00BFFF" 
    height={80} 
    width={80} />
}