import React from "react";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PopupTesting from "./pages/PopupTesting";
import RandomUserDisp from "./pages/RandomUserDisp";
import FancyAnimal from "./pages/FancyAnimal";
import Marquee from "react-fast-marquee";
import Logo from "./pages/Logo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="/PopupTesting" element={<PopupTesting />} />
        <Route path="/RandomUserDisp" element={<RandomUserDisp />} />
        <Route path="/FancyAnimal" element={<FancyAnimal />} />
        <Route path="/Logo" element={<Logo />} />
      </Routes>
      <h1>
        Main Page <br />
      </h1>
      <div>
        <Marquee>This text will scroll from right to left</Marquee>

        <br></br>
        <figure>
          <blockquote>
            <p>
              It was a bright cold day in April, and the clocks were striking
              thirteen.
            </p>
          </blockquote>
          <figcaption>
            First sentence in{" "}
            <cite>
              <a href="http://www.george-orwell.org/1984/0.html">
                Nineteen Eighty-Four
              </a>
            </cite>{" "}
            by George Orwell (Part 1, Chapter 1).
          </figcaption>
        </figure>

        <Marquee
          direction=""
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            top: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#ccc",
            padding: "100px",
          }}
          pauseOnHover="true"
        >
          This is a scrolling message.
        </Marquee>
      </div>
    </Router>
  );
}

export default App;
