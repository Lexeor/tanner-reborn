import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from "use-sound";
import styleVariables from "../styles/_variables.scss";
import { timeFormat } from "../utils/utils";

import dingSfx from "../sounds/Ding.mp3";

type TimerItemType = {
  id: number;
  time: number;
  isPlaying?: boolean;
};

type TimerProps = {
  id: number;
  item: TimerItemType;
  active: boolean;
  finished: boolean;
  switchTimer: (id: number) => void;
  toggleTimer: () => void;
};

type TimeProps = {
  remainingTime: number;
  elapsedTime: number;
  color: string;
};

function Timer(props: TimerProps) {
  const [playNotification] = useSound(dingSfx);
  const context = useContext(ThemeContext);

  const renderSide = (id: number) => {
    switch (id % 5) {
      case 0:
        return "Face";
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

  const renderStage = (id: number) => {
    return Math.floor(id / 5) + 1;
  };

  const renderTime = (time: TimeProps) => {
    if (props.finished) {
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
      <div className={`timer-body${!props.active ? " inactive" : ""}`}>
        <h3>{renderStage(props.id)} stage</h3>
        <h1 className="timer-clock">{timeFormat(time.remainingTime)}</h1>
        <h3>{renderSide(props.id)}</h3>
      </div>
    );
  };

  return (
    <div className="timer-wrapper" onClick={() => props.toggleTimer()}>
      <CountdownCircleTimer
        key={props.id}
        isPlaying={!props.finished ? props.active : false}
        size={200}
        strokeWidth={10}
        trailColor={
          // TODO Implement sass variables
          props.finished
            ? "#00ff00"
            : context?.theme === "light"
            ? "#d9d9d9"
            : "#303d44"
        }
        duration={props.item.time}
        // TODO Implement sass variables
        colors={["#f8c300", "#f8c300"]}
        colorsTime={[props.item.time, 0]}
        onComplete={() => {
          playNotification();
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
