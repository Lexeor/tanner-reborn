import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import styleVariables from "./styles/_variables.scss";
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
  const [currentTimer, setCurrentTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [tsOpened, setTsOpened] = useState(false);

  // const timerComponents = timersState.map(({ id, time, isPlaying }) => (
  //   <div key={id} className="timer-div">
  //     <Timer id={id} time={time} active={isPlaying} switchTimer={switchTimer} />
  //   </div>
  // ));

  function switchTimer(id) {
    setCurrentTimer((prev) => id);

    // Start next timer
    toggleTimer();
  }

  function toggleTimer() {
    setIsPlaying((prev) => !prev);
  }

  function openTimerSettings() {
    setTsOpened((prev) => !prev);
  }

  useEffect(() => {
    toggleTimer();
  }, [currentTimer]);

  return (
    <div className="App">
      <div className="container">
        <header>
          <i class="ri-moon-fill"></i>
          TANNER
          <i class="ri-settings-3-fill"></i>
        </header>
        <div className="timer-background"></div>
        <Timer
          id={currentTimer}
          item={timersState[currentTimer]}
          active={isPlaying}
          switchTimer={switchTimer}
          toggleTimer={toggleTimer}
        />
        {/* <div className="timer">
          <div className="timer-stage">
            <div className="timer-sub-header">1</div>
            <div className="timer-sub-header">ЭТАП</div>
          </div>
          <div className="timer-clock">15:00</div>
          <div className="timer-sub-header">Спина</div>
        </div> */}
        <div className={`shadow-circle${tsOpened ? " opened" : ""}`}>
          <div className="timers-panel">
            <div className="timers-headers">
              <div>Face</div>
              <div>Back</div>
              <div>Right</div>
              <div>Left</div>
              <div>Shadow</div>
            </div>
            <div className="timer-selector-wrapper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit
              quisquam delectus vel porro molestiae sunt, voluptas repudiandae
              harum pariatur. Excepturi distinctio facilis aut laboriosam
              tenetur at possimus dicta. Minus!
            </div>
          </div>
          <i
            className={`i-chevron ri-arrow-down-s-line${
              tsOpened ? " opened" : ""
            }`}
            onClick={openTimerSettings}
          ></i>
          {/* <div
            className={`chevron${tsOpened ? " opened" : ""}`}
            onClick={openTimerSettings}
          ></div> */}
        </div>
        {/* <div className="timers">{timerComponents}</div> */}
      </div>
    </div>
  );
}

export default App;
