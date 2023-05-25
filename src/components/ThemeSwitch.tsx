import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeSwitch() {
  const context = useContext(ThemeContext);

  return (
    <div className="settings-icon">
      <i
        className={
          context?.theme === "light" ? "ri-sun-line" : "fa-solid fa-moon"
        }
        onClick={context?.toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitch;
