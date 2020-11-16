import logo from './logo.svg';
import './App.css';
import Weather from "./weather.js";
import Search from "./Search.js";

function App() {
  return (
    <div className="search">
      <Search/>
        <h1>New York City </h1>
      <div className="card">
        <h2>Monday, 10:22,</h2>
        <img
          src="https://www.publicdomainpictures.net/pictures/310000/velka/orange-circle.png"
          alt="clear"
          className="icon"
        />

      </div>
      <br />
      <h5>
        <a href="https://github.com/remyq7/React" alt="GitHUb page">
          Open-source code by{" "}
        </a>
        Vera Malanyaon
      </h5>
    </div>
  );
}

export default App;
