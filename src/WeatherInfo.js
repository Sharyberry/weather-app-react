import React from "react";
import formattedDate from "./formattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.Data.city}</h1>
      <ul>
        <li>
          <formattedDate date={props.Data.date} />
        </li>
        <li className="text-capitalize">{props.Data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.Data.iconUrl}
              alt={props.Data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.Data.humidity}%</li>
            <li>Wind:{props.Data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
