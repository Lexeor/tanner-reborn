import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  showPopup: boolean;
  togglePopup: () => void;
  tanningStyle: number;
  changeCurrentTimer: (id: number, started?: boolean) => void;
};

const TanningStyles = [
  { name: "Normal", rollback: 3 },
  { name: "Fast", rollback: 2 },
  { name: "Extreme", rollback: 1 },
];

function Popup({
  showPopup,
  togglePopup,
  tanningStyle,
  changeCurrentTimer,
}: Props) {
  const currentTimer = useLocalStorage("currentTimer", 0)[0];
  console.log(currentTimer);

  // Calculate new currentTimer id for switching stage (which is id multiple of 5)
  function calculateNewStage() {
    const result: number =
      Math.floor(
        (currentTimer - TanningStyles[tanningStyle].rollback * 5) / 5
      ) * 5;
    console.log(result >= 0 ? result : 0);
    return result >= 0 ? result : 0;
  }

  return (
    <div
      className="overlay"
      style={{
        visibility: showPopup ? "visible" : "hidden",
        opacity: showPopup ? "1" : "0",
      }}
    >
      <div className="popup">
        <div className="popup-header">
          <h2>New Day!</h2>
        </div>
        <p>
          Your current tanning style is set to{" "}
          <b>{TanningStyles[tanningStyle].name}</b>
        </p>
        <p>
          Move current timer back for{" "}
          <b>{TanningStyles[tanningStyle].rollback} stages</b> according to this
          setting?
        </p>
        <button
          className="btn-primary"
          onClick={() => {
            changeCurrentTimer(calculateNewStage(), false);
            togglePopup();
          }}
        >
          Accept
        </button>
        <button className="btn-secondary" onClick={togglePopup}>
          Ignore
        </button>
      </div>
    </div>
  );
}

export default Popup;
