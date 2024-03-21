import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="MainTemperature d-flex">
        <div className="temperatureMain">{props.celsius}</div>
        <div className="temperatureFormat">
          °C /{" "}
          <a href="/" className="active" onClick={showFahrenheit}>
            F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MainTemperature d-flex">
        <div className="temperatureMain">{Math.round(fahrenheit())}</div>
        <div className="temperatureFormat">
          <a href="/" className="active" onClick={showCelsius}>
            °C
          </a>{" "}
          / F
        </div>
      </div>
    );
  }
}
