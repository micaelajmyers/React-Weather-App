import React from "react";
export default function Temperature() {
  return (
    <div className="row basic">
      <div
        className="current-temperature col-3 offset-1"
        id="current-temperature"
      >
        24
      </div>
      <div className="col-2 basic measurementButton">°F</div>
      <div className="current-weather-icon col-6">
        🌨<i id="large-icon"></i>{" "}
      </div>
      <div className="city col-5 offset-1" id="city">
        {" "}
        New York
      </div>
      <div className="current-weather col-6" id="current-weather">
        Light Snow
      </div>
      <div className="day-time col-5 offset-1">
        {" "}
        December 5, 2021
        <div id="today"></div>
      </div>
      <div className="precipitation col-6">
        Humidity:
        <span id="humidity"> 80%</span>
      </div>
      <div className="wind col-6 offset-6">
        Wind:
        <span id="wind"> 5 mph</span>
      </div>
    </div>
  );
}
