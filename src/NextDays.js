import React, { useEffect, useState } from "react";
import axios from "axios";

import WeatherNextDays from "./WeatherNextDays";
import "./NextDays.css";
import PuffLoader from "react-spinners/PuffLoader";

export default function NextDays(props) {
  let [loaded, setLoaded] = useState(false);
  let [daysForecast, setDaysForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setDaysForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="NextDays">
        <div className="card mt-5 mb-3">
          <div className="card-body">
            {daysForecast.map(function (dailyDaysForecast, index) {
              if (index < 6 && index > 0) {
                return (
                  <div className="col-12" key={index}>
                    <WeatherNextDays data={dailyDaysForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
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
      <div className="NextDays">
        <div className="card mt-5 mb-3">
          <div className="card-body">
            <div className="row loadingDays row-cols-3">
              {Array(15)
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
