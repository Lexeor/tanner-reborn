import React, { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
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

  const timerComponents = timersState.map(({ id, time, isPlaying }) => (
    <div key={id} className="timer-div">
      <Timer id={id} time={time} active={isPlaying} switchTimer={switchTimer} />
    </div>
  ));

  function switchTimer(id) {
    setTimersState((prevTimersState) =>
      prevTimersState.map((timerState) => {
        return timerState.id === id
          ? { ...timerState, isPlaying: !timerState.isPlaying }
          : timerState;
      })
    );
  }

  return (
    <div className="App">
      <div className="container">
        {/* <div className="shadow-circle"></div> */}
        <div className="header">TANNER</div>
        <div className="timer">
          <div className="timer-stage">
            <div className="timer-sub-header">1</div>
            <div className="timer-sub-header">ЭТАП</div>
          </div>
          <div className="timer-clock">15:00</div>
          <div className="timer-sub-header">Спина</div>
        </div>
        {/* <div className="chevron"></div> */}
        <div className="timers-headers">
          <div>Face</div>
          <div>Back</div>
          <div>Right</div>
          <div>Left</div>
          <div>Shadow</div>
        </div>
        <div className="timers">{timerComponents}</div>
      </div>
    </div>
  );
}

export default App;
