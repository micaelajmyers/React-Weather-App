import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState("");
  let [searchResult, setsearchResult] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  function showTemperature(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city === ``) {
      alert(`Please enter a city.`);
    } else {
      setsearchResult(
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Humidity: {humidity}%</li>
          <li>Description: {description}</li>
          <li>Wind: {Math.round(wind)} mph</li>
          <li>Icon:</li>
        </ul>
      );
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=182670c1e112ae39e969dc43c877351c&units=metric`;
    axios.get(url).then(showTemperature);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar" id="search-bar">
        <div className="search">
          <input
            type="search"
            onChange={updateCity}
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
      <h3> {searchResult} </h3>
    </div>
  );
}
