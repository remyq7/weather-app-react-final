import React from "react";
import Weather from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>This project was coded by Vera Malanyaon and is {" "}
         <a href="https://github.com/remyq7/weather-app-react-final" target="_blank" rel="noreferrer" alt="GitHUb page">
            open-sourced on GitHub
         </a>    and{" "}
          <a
            href="https://tender-neumann-2ce604.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="Netlify page"
          >
            hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}

