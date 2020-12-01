import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="search">
      <div className="container">
      <Search /> 
        <h1>New York City</h1>
      <div className="card">
        <h2>Monday, 10:22,</h2></div>
        
    <div className="Temperature">     
          <strong>°C{" "} </strong>|{" "} °F
      </div>
        <img
          src="https://www.publicdomainpictures.net/pictures/310000/velka/orange-circle.png"
          alt="clear"
          className="icon"
        /><div>
      </div>
      <div className="Forecast">
        This is the forecast</div>
      <br />
      <h5>
        <a href="https://github.com/remyq7/weather-app-react-final" alt="GitHUb page">
          Open-source code by{" "}
        Vera Malanyaon </a>
      </h5>
    </div>
    </div>
  );
}

