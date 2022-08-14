import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
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
    if (emo.id == props.data.iconid) return true;
  });
  let emojiname = found.type;
  return (
    <div>
      <div className="row basic">
        <div
          className="current-temperature col-3 offset-1"
          id="current-temperature"
        >
          {Math.round(props.data.temperature)}
        </div>
        <div className="col-2 basic measurementButton">°F</div>
        <div className="current-weather-icon col-6">
          <i id="large-icon" className={`${emojiname}`}></i>{" "}
        </div>
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
      <div className="row basic">
        <div className="day1 col">
          <div className="day1-name">Mon</div>
          <div className="day1-weather-icon mini-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="day1-temp">46°</div>
        </div>
        <div className="day2 col">
          <div className="day2-name">Tue</div>
          <div className="day2-weather-icon mini-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="day2-temp">46°</div>
        </div>
        <div className="day3 col">
          <div className="day3-name">Wed</div>
          <div className="day3-weather-icon mini-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="day3-temp">46°</div>
        </div>
        <div className="day4 col">
          <div className="day4-name">Thu</div>
          <div className="day4-weather-icon mini-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="day4-temp">46°</div>
        </div>
        <div className="day5 col">
          <div className="day5-name">Fri</div>
          <div className="day5-weather-icon mini-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="day5-temp">46°</div>
        </div>
      </div>
    </div>
  );
}
