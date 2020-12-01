import React from "react";
import Weather from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
         <a href="https://github.com/remyq7/weather-app-react-final" target="_blank" rel="noreferrer" alt="GitHUb page">
           This project was coded by Vera Malanyaon open-sourced on GitHub
         </a>    
        </footer>
      </div>
    </div>
  );
}

