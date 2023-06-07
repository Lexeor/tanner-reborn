import React, { useEffect, useState, useContext } from "react";
import {
  timeFormat,
  roundNumber,
  formatDateTime,
  compareDates,
} from "./utils/utils";
//Contexts
import { ThemeContext } from "./contexts/ThemeContext";
//Components
import useLocalStorage from "./hooks/useLocalStorage";
import Timer from "./components/Timer";
import WeatherStat from "./components/WeatherStat";
import ThemeSwitch from "./components/ThemeSwitch";
import SettingsMenu from "./components/SettingsMenu";
import Popup from "./components/Popup";
// Goltis data
import { goltisData } from "./data/goltis";
import { debugData } from "./data/debug";

import { WeatherData } from "./types/types";
import { request } from "./utils/fetch";

function App() {
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherCity, setWeatherCity] = useLocalStorage("weatherCity", "Baku");

  //Debug mode
  const debug = false;
  const timersState = !debug ? goltisData : debugData;

  // App States
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);

  const [tsOpened, setTsOpened] = useState(false);
  // ThemeContext
  const context = useContext(ThemeContext);

  // Current states
  const [currentTimer, setCurrentTimer] = useLocalStorage("currentTimer", 0);
  const [currentStyle, setCurrentStyle] = useLocalStorage("tanningStyle", 0);
  const [lastSunbathDate, setLastSunbathDate] = useLocalStorage(
    "sunbathDate",
    JSON.stringify(new Date())
  );

  // Table with timer selection
  const timersTable = timersState.map(({ id, time }) => {
    const timerClass = `timer-btn${
      currentTimer ? (currentTimer + 1 === id ? " current" : "") : ""
    }`;
    return (
      <button
        key={id}
        className={timerClass}
        onClick={() => {
          toggleTimerSettings();
          switchTimer(id - 1);
        }}
      >
        {timeFormat(time)}
      </button>
    );
  });

  // Timer functions
  function switchTimer(id: number, started: boolean = true) {
    if (id < timersState.length) {
      if (isFinished) {
        setIsFinished(false);
      }
      setCurrentTimer(id);
      // Start next timer
      started &&
        setIsPlaying(() => {
          setLastSunbathDate(JSON.stringify(new Date()));
          return true;
        });
    } else {
      setIsFinished(true);
    }
  }

  function toggleTimer() {
    setIsPlaying((prev) => {
      // Set new "last sunbath Date" if toggled to play
      !prev && setLastSunbathDate(JSON.stringify(new Date()));
      return !prev;
    });
  }

  function toggleTimerSettings() {
    setTsOpened((prev) => !prev);
  }

  // Effects
  useEffect(() => {
    // Put finished timer to localStorage
    localStorage.setItem("currentTimer", JSON.stringify(currentTimer));
  }, [currentTimer]);

  useEffect(() => {
    // Put selected tanning style to localStorage
    localStorage.setItem("tanningStyle", JSON.stringify(currentStyle));
  }, [currentStyle]);

  // Generate theme class
  const AppClass = `App theme-${context?.theme}`;

  // Settings menu toggler
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  // Weather variables
  const temp = `${
    weather?.main.feels_like ? roundNumber(weather?.main.feels_like) : "--"
  }°`;
  const uv = `${
    weather?.main.uv_index ? roundNumber(weather?.main.uv_index) : "--"
  }`;
  const wind = `${
    weather?.wind?.speed ? roundNumber(weather?.wind?.speed) : "--"
  } m/s`;

  // Weather initial fetch
  useEffect(() => {
    request<WeatherData>("http://51.250.94.131:8000/").then((data) => {
      setWeather(data);
    });
  }, [weatherCity]);

  // Check last sunbath date
  useEffect(() => {
    if (!compareDates(new Date(JSON.parse(lastSunbathDate)), new Date())) {
      // if not today - prompt the user to choose an action
      setIsPopupShow(true);
    }
  }, []);

  // Popup
  function togglePopup() {
    setIsPopupShow((prev) => !prev);
  }

  return (
    <div className={AppClass}>
      <div className="container">
        <Popup
          showPopup={isPopupShow}
          togglePopup={togglePopup}
          changeCurrentTimer={switchTimer}
          tanningStyle={currentStyle}
        />
        <SettingsMenu isHidden={!isMenuVisible} toggleMenu={toggleMenu} />
        <header>
          <ThemeSwitch />
          {isMenuVisible ? "SETTINGS" : "TANNER"}
          <div className="settings-icon" onClick={toggleMenu}>
            <i
              className={isMenuVisible ? "ri-close-line" : "ri-menu-3-line"}
            ></i>
          </div>
        </header>
        <div className="timer-background"></div>
        <Timer
          id={currentTimer ? currentTimer : 0}
          item={currentTimer ? timersState[currentTimer] : timersState[0]}
          active={isPlaying}
          finished={isFinished}
          switchTimer={switchTimer}
          toggleTimer={toggleTimer}
        />
        <div className={`shadow-circle${tsOpened ? " opened" : ""}`}>
          <div className="timers-panel">
            <div className="timers-headers">
              <div>Face</div>
              <div>Back</div>
              <div>Left</div>
              <div>Right</div>
              <div>Shadow</div>
            </div>
            <div className="timer-selector-wrapper">
              <div className="timers-table">{timersTable}</div>
            </div>
          </div>
          <i
            className={`i-chevron ri-arrow-down-s-line${
              tsOpened ? " opened" : ""
            }`}
            onClick={toggleTimerSettings}
          ></i>
        </div>
        <div className="weather-stats-container">
          <WeatherStat
            name="Temperature"
            icon="ri-temp-hot-line"
            value={temp}
          />
          <WeatherStat name="Wind" icon="ri-windy-line" value={wind} />
          <WeatherStat
            name="UV Index"
            type="uv"
            icon="ri-cloud-line"
            value={uv}
          />
          <WeatherStat
            name="Burn Risk"
            type="burn"
            icon="ri-fire-line"
            value={uv}
          />
        </div>
        <div className="weather-info">
          <div>{weatherCity}</div>
          <div>
            Last updated: {formatDateTime(weather?.main?.date_time.toString())}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
