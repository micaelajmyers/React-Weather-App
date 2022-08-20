import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div>
      <WeatherTemperature
        code={props.data.iconid}
        fahrenheit={props.data.temperature}
      />
      <div className="row basic">
        <div className="city col-5 offset-1" id="city">
          {" "}
          {props.data.city}
        </div>
        <div
          className="current-weather col-6 text-capitalize"
          id="current-weather"
        >
          {props.data.description}
        </div>
        <div className="day-time col-5 offset-1">
          {" "}
          <FormattedDate date={props.data.date} />
          <div id="today"></div>
        </div>
        <div className="precipitation col-6">
          Humidity:
          <span id="humidity"> {Math.round(props.data.humidity)}%</span>
        </div>
        <div className="wind col-6 offset-6">
          Wind:
          <span id="wind"> {Math.round(props.data.wind)} mph</span>
        </div>
      </div>
      <br />
      <div className="basic weather-forecast" id="forecast"></div>
    </div>
  );
}
