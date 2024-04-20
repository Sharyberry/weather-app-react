import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was created by{" "}
          <a
            href="https://www.linkedin.com/in/sharon-mahlakeng-98118531/"
            target="_blank"
            rel="noreferrer"
          >
            Sharon Mahlakeng{" "}
          </a>{" "}
          and
          <a
            href="https://github.com/Sharyberry/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            it is open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
