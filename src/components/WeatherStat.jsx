import React from "react";

function WeatherStat(props) {
  return (
    <div className="weather-stat">
      <i class={props.icon}></i>
      <div className="weather-stat-data">
        <span className="stat-value">{props.value}</span>
        <span className="stat-name">{props.name}</span>
      </div>
    </div>
  );
}

export default WeatherStat;
