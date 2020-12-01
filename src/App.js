import React from "react";
import './App.css';
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="New York"/>
            <h1>New York City</h1>
          </div>
  
      <p>
        Open-source code by{" "}
        <a href="https://github.com/remyq7/weather-app-react-final" target="_blank" rel="noreferrer" alt="GitHUb page">
        Vera Malanyaon </a> 
      </p>
    </div>
    
  );
}

