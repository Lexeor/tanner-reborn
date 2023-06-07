import React from "react";
import SlidingSelector from "./SlidingSelector";
import Dropdown from "./Dropdown";

type Props = {
  isHidden: boolean;
  toggleMenu: () => void;
  setWeatherCity: (city: string) => void;
};

function SettingsMenu({ isHidden, setWeatherCity }: Props) {
  const panelClass = `settings-menu${isHidden ? " hidden" : ""}`;

  return (
    <div className={panelClass}>
      <h2>Tanning Style</h2>
      <SlidingSelector
        options={["Normal", "Fast", "Extreme"]}
        localStorageValue={"tanningStyle"}
      />
      <h2>Weather location</h2>
      <Dropdown list={["Antalya", "Baku"]} setWeatherCity={setWeatherCity} />
    </div>
  );
}

export default SettingsMenu;
