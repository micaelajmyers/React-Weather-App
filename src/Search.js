import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  //let [searchResult, setsearchResult] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  //function handleSubmit(event) {
  //event.preventDefault();
  //if (city === ``) {
  //alert(`Please enter a city.`);
  //} else {
  //setsearchResult(
  //<ul>
  //<li>Temperature: {Math.round(temperature)}°C</li>
  //<li>Humidity: {humidity}%</li>
  //<li>Description: {description}</li>
  //<li>Wind: {Math.round(wind)} mph</li>
  //<li>Icon:</li>
  //</ul>
  //);
  //}
  //}
  //function updateCity(event) {
  //setCity(event.target.value);
  //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=182670c1e112ae39e969dc43c877351c&units=imperial`;
  //axios.get(url).then(showTemperature);
  //}

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form className="search-bar" id="search-bar">
            <div className="search">
              <input
                type="search"
                //onChange={updateCity}
                className="searchTerm"
                placeholder="Enter City Here"
                id="search-text-input"
                autocomplete="off"
              />
              <button type="submit" class="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="row basic">
          <div
            className="current-temperature col-3 offset-1"
            id="current-temperature"
          >
            {Math.round(weatherData.temperature)}
          </div>
          <div className="col-2 basic measurementButton">°F</div>
          <div className="current-weather-icon col-6">
            🌨<i id="large-icon"></i>{" "}
          </div>
          <div className="city col-5 offset-1" id="city">
            {" "}
            {weatherData.city}
          </div>
          <div
            className="current-weather col-6 text-capitalize"
            id="current-weather"
          >
            {weatherData.description}
          </div>
          <div className="day-time col-5 offset-1">
            {" "}
            <FormattedDate date={weatherData.date} />
            <div id="today"></div>
          </div>
          <div className="precipitation col-6">
            Humidity:
            <span id="humidity"> {Math.round(weatherData.humidity)}%</span>
          </div>
          <div className="wind col-6 offset-6">
            Wind:
            <span id="wind"> {Math.round(weatherData.wind)} mph</span>
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
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=182670c1e112ae39e969dc43c877351c&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return <div>"Loading..." </div>;
  }
}
