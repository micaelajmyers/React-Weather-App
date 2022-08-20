import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.list);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="row basic">
        <WeatherForecastDay data={forecast[6]} datamin={forecast[9]} />
        <WeatherForecastDay data={forecast[14]} datamin={forecast[17]} />
        <WeatherForecastDay data={forecast[22]} datamin={forecast[25]} />
        <WeatherForecastDay data={forecast[30]} datamin={forecast[33]} />
        <WeatherForecastDay data={forecast[38]} datamin={forecast[39]} />
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=182670c1e112ae39e969dc43c877351c&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
