import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      iconid: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=182670c1e112ae39e969dc43c877351c&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=182670c1e112ae39e969dc43c877351c&units=imperial`;
    //axios.get(url).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit} className="search-bar" id="search-bar">
            <div className="search">
              <input
                type="search"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
