import React from "react";
/*import logo from './logo.svg';*/
import logo from "../riverdeer.svg";
import "./FancyAnimal.css";

/*App definisjon, funksjonalitet*/
function FancyAnimal() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default FancyAnimal;