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
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function submitLondon() {
    setCity("London");
  }

  function submitNewYork() {
    setCity("New York");
  }

  function submitTokyo() {
    setCity("Tokyo");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleGeolocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function locationSubmit(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleGeolocation);
  }

  if (weatherData.ready) {
    return (
      <div
        className="App pt-2"
        style={{
          backgroundImage:
            `url(` + require(`./cat-images/${weatherData.icon}.jpg`) + `)`,
        }}
      >
        <div className="container">
          <div className="card mb-4">
            <div className="card-body">
              <h1>Weather Forecast with Cats</h1>
            </div>
          </div>
          <div className="card mt-4 mb-5">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search City"
                        onChange={handleCityChange}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                      >
                        <i className="fa-solid fa-paw pawCat"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-2">
                  <form onSubmit={locationSubmit}>
                    <button className="btn btn-outline-secondary" type="submit">
                      <i className="fa-solid fa-location-dot yourLocation"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="gap-sm-4 threeCities">
                <form onSubmit={handleSubmit}>
                  <button
                    className="btn btn-outline-secondary navigationCity"
                    type="submit"
                    onClick={submitLondon}
                  >
                    London
                  </button>
                </form>
                <form onSubmit={handleSubmit}>
                  <button
                    className="btn btn-outline-secondary navigationCity"
                    type="submit"
                    onClick={submitNewYork}
                  >
                    New York
                  </button>
                </form>
                <form onSubmit={handleSubmit}>
                  <button
                    className="btn btn-outline-secondary navigationCity"
                    type="submit"
                    onClick={submitTokyo}
                  >
                    Tokyo
                  </button>
                </form>
              </div>
            </div>
          </div>
          <MainCity data={weatherData} />
          <TodayForecast coord={weatherData.coord} />
          <NextDays coord={weatherData.coord} />
          <Creator />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
