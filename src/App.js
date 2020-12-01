import React from "react";
import './App.css';
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form id="city-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type City here"
                className="form-control"
                autoFocus="on"/>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Search defaultCity="New York"/>
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

