import React from "react";

type WeatherStatProps = {
  icon: string;
  value: string;
  name: string;
};

function WeatherStat({ icon, value, name }: WeatherStatProps) {
  return (
    <div className="weather-stat">
      <i className={icon}></i>
      <div className="weather-stat-data">
        <span className="stat-value">{value}</span>
        <span className="stat-name">{name}</span>
      </div>
    </div>
  );
}

export default WeatherStat;
