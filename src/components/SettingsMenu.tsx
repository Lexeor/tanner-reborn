import React from "react";
import SlidingSelector from "./SlidingSelector";

type Props = {
  isHidden: boolean;
  toggleMenu: () => void;
};

function SettingsMenu({ isHidden }: Props) {
  const panelClass = `settings-menu${isHidden ? " hidden" : ""}`;

  return (
    <div className={panelClass}>
      <h2>Tanning Style</h2>
      <SlidingSelector options={["Normal", "Fast", "Extreme"]} />
    </div>
  );
}

export default SettingsMenu;
