import React from "react";

export default function WeatherTodayForecast(props) {
  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();

    let hours = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];

    return hours[hour];
  }

  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherTodayForecast">
      <form>
        <div className="forecastTimeToday">{hour()}</div>
        <div className="forecastIconToday">
          <img
            className="weatherIconHour"
            src={require(`./images/${props.data.weather[0].icon}.png`)}
            alt={props.data.weather[0].description}
          />
        </div>
        <div className="forecastTemperatureToday">{temperature()}</div>
      </form>
    </div>
  );
}
