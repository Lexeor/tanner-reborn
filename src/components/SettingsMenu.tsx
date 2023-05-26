import React from "react";

type Props = {
  isHidden: boolean;
  toggleMenu: () => void;
};

function SettingsMenu({ isHidden }: Props) {
  const panelClass = `settings-menu${isHidden ? " hidden" : ""}`;

  return <div className={panelClass}>SettingsMenu</div>;
}

export default SettingsMenu;
