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
            <div className="col-8 cityInfo">
              <h2>{props.data.city}</h2>
            </div>
            <div className="col-4  ">
              <div className="dateTime">
                <FormattedDate date={props.data.date} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-4 cityInfo">
              <form>
                <h3>{props.data.description}</h3>
                <h4>
                  <div>Feels like: {props.data.feelsLike} °C</div>
                  <div>Humidity: {props.data.humidity} %</div>
                  <div>Wind: {props.data.wind} km/h</div>
                </h4>
              </form>
            </div>
            <div className="col-sm-3 col-4 pt-4 pt-sm-0 ps-0 pe-0 image">
              <form>
                <img
                  className="mainIcon"
                  src={require(`./images/${props.data.icon}.png`)}
                  alt={props.data.description}
                />
              </form>
            </div>
            <div className="col-sm-4 col-4  cityTemperature">
              <form>
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
