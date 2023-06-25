import React from "react";

type WindIconProps = {
  direction: number;
};

function WindIcon({ direction }: WindIconProps) {
  // Convert wind direction deg to string value
  function renderDirection() {
    const val = Math.round(direction / 22.5);
    const arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  }
  return (
    <>
      <i
        className="fa-solid fa-arrow-up"
        style={{ transform: `rotate(${direction}deg)` }}
      ></i>
      <span>{renderDirection()}</span>
    </>
  );
}

export default WindIcon;
