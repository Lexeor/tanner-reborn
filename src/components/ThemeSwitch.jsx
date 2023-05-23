import React, { useContext } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon-solid.svg";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeSwitch() {
  //const [isHover, setIsHover] = useState(false);
  const context = useContext(ThemeContext);

  return (
    <div className="settings-icon">
      <i
        className={
          context.theme === "light" ? "ri-sun-line" : "fa-solid fa-moon"
        }
        onClick={context.toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitch;
