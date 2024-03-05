import React from "react";

import IconImages from "./images/cloudy.png";
import "./MainCity.css";

export default function MainCity() {
  let weatherData = {
    city: "London",
    date: "Wednsday, 27 September, 13:12",
    description: "Overcast Clouds",
    mainTemperature: 21,
    temperature: 21,
    humidity: 74,
    wind: 5,
  };
  return (
    <div className="MainCity">
      <div className="card my-4 mainCard">
        <div className="card-body">
          <div className="row">
            <div className="col-4 cityInfo">
              <form>
                <h2>{weatherData.city}</h2>
                <h3>{weatherData.description}</h3>
                <h4>
                  <div>Feels like: {weatherData.temperature}°</div>
                  <div>Humidity: {weatherData.humidity}%</div>
                  <div>Wind: {weatherData.wind} km/h</div>
                </h4>
              </form>
            </div>
            <div className="col-4 image">
              <form>
                <img
                  className="mainIcon"
                  src={IconImages}
                  alt="Temperature Icon"
                />
              </form>
            </div>
            <div className="col-4 cityTemperature">
              <form>
                <div className="dateTime">{weatherData.date}</div>
                <h1 className="d-flex weather-temperature">
                  <div className="temperatureMain">21</div>
                  <div className="temperatureFormat">
                    <a href="/" className="active">
                      °C
                    </a>
                    /<a href="/">F</a>
                  </div>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
