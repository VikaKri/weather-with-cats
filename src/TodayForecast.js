import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TodayForecast.css";
import PuffLoader from "react-spinners/PuffLoader";

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
        <div className="card my-3">
          <div className="card-body">
            <div className="row today">
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
    let apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="TodayForecast ">
        <div className="card my-3">
          <div className="card-body">
            <div className="row row-cols-5 today">
              {Array(5)
                .fill(true)
                .map((item, index) => {
                  return (
                    <div
                      className="col d-flex justify-content-center"
                      key={index}
                    >
                      <PuffLoader
                        color="#000000"
                        loading="true"
                        size={40}
                        cssOverride={60}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
