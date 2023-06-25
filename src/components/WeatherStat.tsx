import React from "react";
import WindIcon from "./WindIcon";

type WeatherStatProps = {
  icon: string;
  value: string;
  name: string;
  type?: "temp" | "uv" | "wind" | "burn";
  direction?: number;
};

function WeatherStat({ icon, value, name, type, direction }: WeatherStatProps) {
  // Class for value field
  const valueClass = () => {
    switch (type) {
      case "uv":
      case "burn":
        if (parseFloat(value) > 11) {
          return "stat-value uv-extreme";
        } else if (parseFloat(value) > 7) {
          return "stat-value uv-veryhigh";
        } else if (parseFloat(value) > 5) {
          return "stat-value uv-high";
        } else if (parseFloat(value) > 2) {
          return "stat-value uv-moderate";
        } else if (parseFloat(value) > 0) {
          return "stat-value uv-low";
        }
      // if no value - default case
      case undefined:
      default:
        return "stat-value";
    }
  };

  // Value for value field
  const renderValue = () => {
    if (type) {
      if (type === "burn") {
        if (parseFloat(value) > 11) {
          return "Extreme";
        } else if (parseFloat(value) > 5) {
          return "High";
        } else if (parseFloat(value) > 2) {
          return "Medium";
        } else if (parseFloat(value) > 0) {
          return "Low";
        } else {
          return "No risk";
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
      <div className="weather-stat-icon-wrapper">
        {type === "wind" ? (
          <WindIcon direction={Number(direction!)} />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <div className="weather-stat-data">
        <span className={valueClass()}>{renderValue()}</span>
        <span className="stat-name">{name}</span>
      </div>
    </div>
  );
}

export default WeatherStat;
