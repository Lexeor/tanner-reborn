import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  showPopup: boolean;
  togglePopup: () => void;
  tanningStyle: number;
  changeCurrentTimer: (id: number, started?: boolean) => void;
};

const TanningStyles = [
  { name: "Normal", length: 3 },
  { name: "Fast", length: 2 },
  { name: "Extreme", length: 1 },
];

function Popup({
  showPopup,
  togglePopup,
  tanningStyle,
  changeCurrentTimer,
}: Props) {
  const currentStage = useLocalStorage("currentTimer", 0)[0];
  console.log(currentStage);

  function calculateNewStage() {
    return 1;
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
          <b>{TanningStyles[tanningStyle].length} stages</b> according to this
          setting?
        </p>
        <button
          className="btn-primary"
          onClick={() => changeCurrentTimer(calculateNewStage(), false)}
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
