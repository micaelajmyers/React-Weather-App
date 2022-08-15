import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  //Emoji Array
  var emo = [
    { id: "01d", type: "fa-solid fa-sun" },
    { id: "01n", type: "fa-solid fa-moon" },
    { id: "02d", type: "fa-solid fa-cloud-sun" },
    { id: "02n", type: "fa-solid fa-cloud-moon" },
    { id: "03d", type: "fa-solid fa-cloud" },
    { id: "03n", type: "fa-solid fa-cloud-moon" },
    { id: "04d", type: "fa-solid fa-cloud" },
    { id: "04n", type: "fa-solid fa-cloud-moon" },
    { id: "09d", type: "fa-solid fa-cloud-showers-heavy" },
    { id: "09n", type: "fa-solid fa-cloud-moon-rain" },
    { id: "10d", type: "fa-solid fa-cloud-showers-heavy" },
    { id: "10n", type: "fa-solid fa-cloud-moon-rain" },
    { id: "11d", type: "fa-solid fa-cloud-bolt" },
    { id: "11n", type: "fa-solid fa-cloud-bolt" },
    { id: "13d", type: "fa-solid fa-snowflake" },
    { id: "13n", type: "fa-solid fa-snowflake" },
    { id: "50d", type: "fa-solid fa-smog" },
    { id: "50n", type: "fa-solid fa-smog" },
  ];
  //Emoji Array
  var found = emo.find(function (emo, index) {
    if (emo.id === props.weatheremoji) return true;
  });
  let emojiname = found.type;
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
          <i id="large-icon" className={`${emojiname}`}></i>{" "}
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
          <i id="large-icon" className={`${emojiname}`}></i>{" "}
        </div>
      </div>
    );
  }
}
