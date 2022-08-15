import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  const codeMapping = {
    "01d": "fa-solid fa-sun",
    "01n": "fa-solid fa-moon",
    "02d": "fa-solid fa-cloud-sun",
    "02n": "fa-solid fa-cloud-moon",
    "03d": "fa-solid fa-cloud",
    "03n": "fa-solid fa-cloud-moon",
    "04d": "fa-solid fa-cloud",
    "04n": "fa-solid fa-cloud-moon",
    "09d": "fa-solid fa-cloud-showers-heavy",
    "09n": "fa-solid fa-cloud-moon-rain",
    "10d": "fa-solid fa-cloud-showers-heavy",
    "10n": "fa-solid fa-cloud-moon-rain",
    "11d": "fa-solid fa-cloud-bolt",
    "11n": "fa-solid fa-cloud-bolt",
    "13d": "fa-solid fa-snowflake",
    "13n": "fa-solid fa-snowflake",
    "50d": "fa-solid fa-smog",
    "50n": "fa-solid fa-smog",
  };

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="row basic">
        <span
          className="current-temperature col-3 offset-1"
          id="current-temperature"
        >
          {Math.round(props.fahrenheit)}
        </span>
        <span className="col-2 basic measurementButton">
          °F |{" "}
          <a className="link" href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>

        <div className="current-weather-icon col-6">
          <i id="large-icon" className={`${codeMapping[props.code]}`}></i>{" "}
        </div>
      </div>
    );
  } else {
    let celsiustemp = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="row basic">
        <span
          className="current-temperature col-3 offset-1"
          id="current-temperature"
        >
          {Math.round(celsiustemp)}
        </span>
        <span className="col-2 basic measurementButton">
          <a className="link" href="/" onClick={convertToFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>

        <div className="current-weather-icon col-6">
          <i id="large-icon" className={`${codeMapping[props.code]}`}></i>{" "}
        </div>
      </div>
    );
  }
}
