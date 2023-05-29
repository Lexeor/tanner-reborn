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
      if (type === "uv" || "burn") {
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
      } else {
        return "stat-value";
      }
    } else {
      return "stat-value";
    }
  };

  const renderValue = () => {
    if (type) {
      if (type === "burn") {
        if (parseFloat(value) > 11) {
          return "Extreme";
        } else if (parseFloat(value) > 5) {
          return "High";
        } else if (parseFloat(value) > 2) {
          return "Medium";
        } else {
          return "Low";
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  };

  return (
    <div className="weather-stat">
      <i className={icon}></i>
      <div className="weather-stat-data">
        <span className={valueClass()}>{renderValue()}</span>
        <span className="stat-name">{name}</span>
      </div>
    </div>
  );
}

export default WeatherStat;
