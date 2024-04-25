import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function Fahrenheit(){
    return (props.celcius * 9)/5+32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
            °C|{""}
          <a href="/" onClick={showFahrenheit}>
          °F
          </a>
        </span>
      </div>
    );
  } else{
    return(
    <div className="WeatherTemperature">
        <span className="temperature">{Math.round(Fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          {""}| °F
        </span>
      </div>
    );
  }