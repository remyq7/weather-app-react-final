import React from "react";
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="search">
      <div className="container">
      <Search /> 
      <Forecast/>
      <br />
      <h5>
        <a href="https://github.com/remyq7/weather-app-react-final" alt="GitHUb page">
          Open-source code by{" "}
        Vera Malanyaon </a> and <a href="https://tender-neumann-2ce604.netlify.app" target="_blank"> hosted on Netlify</a>
      </h5>
    </div>
    </div>
  );
}

