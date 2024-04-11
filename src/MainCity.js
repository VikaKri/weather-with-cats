import React from "react";

import FormattedDate from "./FormattedDate";
import MainTemperature from "./MainTemperature";

import "./MainCity.css";

export default function MainCity(props) {
  return (
    <div className="MainCity">
      <div className="card my-4 mainCard">
        <div className="card-body">
          <div className="row">
            <div className="col-5 cityInfo">
              <form>
                <h2>{props.data.city}</h2>
                <h3>{props.data.description}</h3>
                <h4>
                  <div>Feels like: {props.data.feelsLike} °C</div>
                  <div>Humidity: {props.data.humidity} %</div>
                  <div>Wind: {props.data.wind} km/h</div>
                </h4>
              </form>
            </div>
            <div className="col-3 ps-0 image">
              <form>
                <img
                  className="mainIcon"
                  src={require(`./images/${props.data.icon}.png`)}
                  alt={props.data.description}
                />
              </form>
            </div>
            <div className="col-4 cityTemperature">
              <form>
                <div className="dateTime">
                  <FormattedDate date={props.data.date} />
                </div>
                <h1>
                  <MainTemperature celsius={props.data.temperature} />
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
