import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from "use-sound";
import styleVariables from "../styles/_variables.scss";

import dingSfx from "../sounds/Ding.mp3";

function Timer(props) {
  const [finished, setFinished] = useState(false);
  const [playNotification] = useSound(dingSfx);

  function timeFormat(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }

  const renderSide = (id) => {
    switch (id % 5) {
      case 0:
        return "Front";
      case 1:
        return "Back";
      case 2:
        return "Left";
      case 3:
        return "Right";
      case 4:
        return "Shadow";
      default:
        return "Front";
    }
  };

  const renderStage = (id) => {
    return Math.floor(id / 5) + 1;
  };

  const renderTime = ({ remainingTime }) => {
    if (finished) {
      return (
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <path
            stroke="green"
            fill="none"
            strokeWidth="5"
            d="m7.49255,27.74515l11.16172,11.31893l26.25363,-26.41084"
            id="svg_1"
          />
        </svg>
      );
    }

    return (
      <div className="timer-body">
        <h3>{renderStage(props.id)} stage</h3>
        <h1 className="timer-clock">{timeFormat(remainingTime)}</h1>
        <h3>{renderSide(props.id)}</h3>
      </div>
    );
  };

  return (
    <div className="timer-wrapper" onClick={() => props.toggleTimer(props.id)}>
      <CountdownCircleTimer
        key={props.id}
        isPlaying={props.active}
        size={200}
        strokeWidth={10}
        trailColor={finished ? "green" : "#d9d9d9"}
        duration={props.item.time}
        colors={[styleVariables.primaryColor, styleVariables.primaryColor]}
        colorsTime={[props.item.time, 0]}
        onComplete={() => {
          playNotification();
          // setFinished((prevState) => !prevState);
          props.switchTimer(props.id + 1);
          return { shouldRepeat: true, delay: 0 };
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
