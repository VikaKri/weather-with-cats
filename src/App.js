import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import MainCity from "./MainCity";
import TodayForecast from "./TodayForecast";
import NextDays from "./NextDays";
import Creator from "./Creator";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="card mt-0 mb-4">
          <div className="card-body">
            <h1>Weather Forecast with Cats</h1>
          </div>
        </div>
        <div className="card mt-4 mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-10 col-sm-4">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      onChange={handleCityChange}
                    />
                    <button className="btn btn-outline-secondary" type="submit">
                      <i className="fa-solid fa-paw pawCat"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-2 col-sm-1">
                <form>
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa-solid fa-location-dot yourLocation"></i>
                  </button>
                </form>
              </div>
              <div className="col-sm-7">
                <div className="mt-sm-0 mt-4 d-flex justify-content-center">
                  <div>
                    <button
                      className="btn btn-outline-secondary navigation-city"
                      type="button"
                    >
                      <a href="/">London</a>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-secondary navigation-city"
                      type="button"
                    >
                      <a href="/">New York</a>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-secondary navigation-city"
                      type="button"
                    >
                      <a href="/">Tokio</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainCity data={weatherData} />
        <TodayForecast />
        <NextDays />
        <Creator />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
