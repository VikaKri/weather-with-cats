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
            <div className="row">
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
      </div>
    );
  } else {
    let apiKey = "b63aaaf20055735f7aobt7dfe52195a4";
    let lon = props.coord.longitude;
    let lat = props.coord.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

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
