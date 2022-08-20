import React from "react";
export default function WeatherIcon(props) {
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
  return <i className={`${codeMapping[props.code]}`}></i>;
}
