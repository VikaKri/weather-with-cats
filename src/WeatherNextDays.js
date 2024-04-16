import React from "react";

export default function WeatherNextDays(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thusday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="row row-cols-3">
      <div className="col d-flex justify-content-center ">
        <div className="forecastDay">{day()}</div>
      </div>
      <div className="col d-flex justify-content-center">
        <img
          className="weatherIconDay"
          src={require(`./images/${props.data.weather[0].icon}.png`)}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="col d-flex justify-content-center">
        <div className="nextDaysTemperature">
          <span className="maxTemperatureNextDays">{maxTemperature()}</span> /{" "}
          <span className="minTemperatureNextDays">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
