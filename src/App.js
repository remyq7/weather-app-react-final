import React from "react";
import './App.css';
import Search from "./Search.js";
import Forecast from "./Forecast.js";
import Info from "./Info.js";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="New York"/>
        <Info defaultCity="New York"/>
        <Forecast defaultCity="New York"/>
      <br />
      <h5>
        Open-source code by{" "}
        <a href="https://github.com/remyq7/weather-app-react-final" alt="GitHUb page">
        Vera Malanyaon </a> 
      </h5>
    </div>
    </div>
  );
}

