import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TodayForecast.css";

import WeatherTodayForecast from "./WeatherTodayForecast";

export default function TodayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="TodayForecast">
        <div className="card my-3 today">
          <div className="card-body">
            <div className="row">
              {forecast.map(function (hourlyForecast, index) {
                if (index < 6 && index > 0) {
                  return (
                    <div className="col" key={index}>
                      <WeatherTodayForecast data={hourlyForecast} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
