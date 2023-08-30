import React from "react";
/*import logo from './logo.svg';*/
import logo from "./riverdeer.svg";
import "./App.css";

/*App definisjon, funksjonalitet*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          /*Legger til styling*/
          className="App-link"
          href="https://reactjs.org"
          /*Åpner ny fane*/
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
