import React from "react";
export default function Forecast() {
  return (
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
  );
}
