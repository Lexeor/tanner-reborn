import React from "react";

type WeatherStatProps = {
  icon: string;
  value: string;
  name: string;
  type?: "temp" | "uv" | "wind" | "burn";
};

function WeatherStat({ icon, value, name, type }: WeatherStatProps) {
  const valueClass = () => {
    if (type) {
      if (type === "uv") {
        if (parseFloat(value) > 11) {
          return "stat-value uv-extreme";
        } else if (parseFloat(value) > 7) {
          return "stat-value uv-veryhigh";
        } else if (parseFloat(value) > 5) {
          return "stat-value uv-high";
        } else if (parseFloat(value) > 2) {
          return "stat-value uv-moderate";
        } else {
          return "stat-value uv-low";
        }
      }
    } else {
      return "stat-value";
    }
  };

  return (
    <div className="weather-stat">
      <i className={icon}></i>
      <div className="weather-stat-data">
        <span className={valueClass()}>{value}</span>
        <span className="stat-name">{name}</span>
      </div>
    </div>
  );
}

export default WeatherStat;
