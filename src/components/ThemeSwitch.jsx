import React, { useState, useContext } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon-solid.svg";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeSwitch() {
  const [isHover, setIsHover] = useState(false);
  const context = useContext(ThemeContext);

  return (
    <div className="theme-switch">
      <img
        src={context.theme === "light" ? Sun : Moon}
        alt=""
        onClick={context.toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitch;
