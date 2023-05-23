import React, { useEffect, useState, useContext } from "react";
import { timeFormat } from "./utils/utils";
import { ThemeContext } from "./contexts/ThemeContext";
import Timer from "./components/Timer";
import WeatherStat from "./components/WeatherStat";
import ThemeSwitch from "./components/ThemeSwitch";
// Goltis data
import { goltis } from "./goltis";

const timers = [
  {
    id: 1,
    time: 2,
    isPlaying: false,
  },
  {
    id: 2,
    time: 4,
    isPlaying: false,
  },
  {
    id: 3,
    time: 4,
    isPlaying: false,
  },
  {
    id: 4,
    time: 3,
    isPlaying: false,
  },
  {
    id: 5,
    time: 10,
    isPlaying: false,
  },
  {
    id: 6,
    time: 2,
    isPlaying: false,
  },
  {
    id: 7,
    time: 4,
    isPlaying: false,
  },
  {
    id: 8,
    time: 4,
    isPlaying: false,
  },
  {
    id: 9,
    time: 3,
    isPlaying: false,
  },
  {
    id: 10,
    time: 10,
    isPlaying: false,
  },
  {
    id: 11,
    time: 2,
    isPlaying: false,
  },
  {
    id: 12,
    time: 4,
    isPlaying: false,
  },
  {
    id: 13,
    time: 4,
    isPlaying: false,
  },
  {
    id: 14,
    time: 3,
    isPlaying: false,
  },
  {
    id: 15,
    time: 10,
    isPlaying: false,
  },
];

function App() {
  const [timersState, setTimersState] = useState(goltis);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  //
  const [tsOpened, setTsOpened] = useState(false);

  const context = useContext(ThemeContext);

  const [currentTimer, setCurrentTimer] = useState(() => {
    const saved = localStorage.getItem("currentTimer");
    const date = localStorage.getItem("sunbathDate");

    let initialValue = 0;
    if (saved) {
      initialValue = JSON.parse(saved);
    }
    return initialValue;
  });

  const timersTable = timersState.map(({ id, time }) => {
    const timerClass = `timer-btn${currentTimer + 1 === id ? " current" : ""}`;
    return (
      <button
        key={id}
        className={timerClass}
        onClick={() => switchTimer(id - 1)}
      >
        {timeFormat(time)}
      </button>
    );
  });

  function switchTimer(id) {
    if (id < timersState.length) {
      if (isFinished) {
        setIsFinished(false);
      }
      setCurrentTimer(id);
      // Start next timer
      setIsPlaying(true);
    } else {
      setIsFinished(true);
    }
  }

  function toggleTimer() {
    setIsPlaying((prev) => !prev);
  }

  function openTimerSettings() {
    setTsOpened((prev) => !prev);
  }

  useEffect(() => {
    // Put finished timer to localStorage
    localStorage.setItem("currentTimer", JSON.stringify(currentTimer));
    //...and date of last sunbath
    localStorage.setItem("sunbathDate", JSON.stringify(new Date()));
  }, [currentTimer]);

  // Genereta theme class
  const AppClass = `App theme-${context.theme}`;

  return (
    <div className={AppClass}>
      <div className="container">
        <header>
          <ThemeSwitch />
          TANNER
          <div className="settings-icon">
            <i className="ri-settings-3-fill"></i>
          </div>
        </header>
        <div className="timer-background"></div>
        <Timer
          id={currentTimer}
          item={timersState[currentTimer]}
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
            onClick={openTimerSettings}
          ></i>
        </div>
        <div className="weather-stats-container">
          <WeatherStat name="Temperature" icon="ri-temp-hot-line" value="26°" />
          <WeatherStat name="Wind" icon="ri-windy-line" value="NNW" />
          <WeatherStat name="UV Index" icon="ri-cloud-line" value="2.8" />
          <WeatherStat name="Burn Risk" icon="ri-fire-line" value="Low" />
        </div>
      </div>
    </div>
  );
}

export default App;
