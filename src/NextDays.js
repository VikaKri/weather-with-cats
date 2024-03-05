import React from "react";

import ImageIcon from "./images/01d.png";
import "./NextDays.css";

export default function NextDays() {
  return (
    <div className="NextDays">
      <div className="card mt-5 mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="row underrow">
                <div className="col underCol">
                  <h1 className="forecastDay">Monday</h1>
                </div>
                <div className="col underCol">
                  <img className="weatherIcon-day" src={ImageIcon} alt="Icon" />
                </div>
                <div className="col underCol">
                  <h1 className="forecastTemperature">
                    <span className="maximumTemperatureNextDays">38°</span> /
                    <span className="minimumTemperatureNextDays">25°</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row underrow">
                <div className="col underCol">
                  <h1 className="forecastDay">Tuesday</h1>
                </div>
                <div className="col underCol">
                  <img className="weatherIcon-day" src={ImageIcon} alt="Icon" />
                </div>
                <div className="col underCol">
                  <h1 className="forecastTemperature">
                    <span className="maximumTemperatureNextDays">39°</span> /
                    <span className="minimumTemperatureNextDays">18°</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row underrow">
                <div className="col underCol">
                  <h1 className="forecastDay">Wednesday</h1>
                </div>
                <div className="col underCol">
                  <img className="weatherIcon-day" src={ImageIcon} alt="Icon" />
                </div>
                <div className="col underCol">
                  <h1 className="forecastTemperature">
                    <span className="maximumTemperatureNextDays">27°</span> /
                    <span className="minimumTemperatureNextDays">15°</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row underrow">
                <div className="col underCol">
                  <h1 className="forecastDay">Thursday</h1>
                </div>
                <div className="col underCol">
                  <img className="weatherIcon-day" src={ImageIcon} alt="Icon" />
                </div>
                <div className="col underCol">
                  <h1 className="forecastTemperature">
                    <span className="maximumTemperatureNextDays">25°</span> /
                    <span className="minimumTemperatureNextDays">15°</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row underrow">
                <div className="col underCol">
                  <h1 className="forecastDay">Friday</h1>
                </div>
                <div className="col underCol">
                  <img className="weatherIcon-day" src={ImageIcon} alt="Icon" />
                </div>
                <div className="col underCol">
                  <h1 className="forecastTemperature">
                    <span className="maximumTemperatureNextDays">23°</span> /
                    <span className="minimumTemperatureNextDays">13°</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
