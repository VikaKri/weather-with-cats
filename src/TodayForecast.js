import React from "react";

import IconImage from "./images/02d.png";
import "./TodayForecast.css";

export default function TodayForecast() {
  return (
    <div className="TodayForecast">
      <div className="card my-3 today">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form>
                <div className="forecastTimeToday">15:00</div>
                <div className="forecastIconToday">
                  <img
                    className="weatherIcon-hour"
                    src={IconImage}
                    alt="Icon"
                  />
                </div>
                <div className="forecastTemperatureToday">31°</div>
              </form>
            </div>
            <div className="col">
              <form>
                <div className="forecastTimeToday">16:00</div>
                <div className="forecastIconToday">
                  <img
                    className="weatherIcon-hour"
                    src={IconImage}
                    alt="Icon"
                  />
                </div>
                <div className="forecastTemperatureToday">31°</div>
              </form>
            </div>
            <div className="col">
              <form>
                <div className="forecastTimeToday">17:00</div>
                <div className="forecastIconToday">
                  <img
                    className="weatherIcon-hour"
                    src={IconImage}
                    alt="Icon"
                  />
                </div>
                <div className="forecastTemperatureToday">31°</div>
              </form>
            </div>
            <div className="col">
              <form>
                <div className="forecastTimeToday">18:00</div>
                <img className="weatherIcon-hour" src={IconImage} alt="Icon" />
                <div className="forecastTemperatureToday">30°</div>
              </form>
            </div>
            <div className="col">
              <form>
                <div className="forecastTimeToday">19:00</div>
                <img className="weatherIcon-hour" src={IconImage} alt="Icon" />
                <div className="forecastTemperatureToday">29°</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
