import React, { useState } from "react";

type Props = {
  options: string[];
};

function SlidingSelector({ options }: Props) {
  // If tanningStyle is not set in localStorage - set 0
  const [activeOption, setActiveOption] = useState(() => {
    const saved = localStorage.getItem("tanningStyle");

    // If currentTimer is not set in localStorage - set 0
    let initialValue = 0;
    if (saved) {
      initialValue = JSON.parse(saved);
    }
    return initialValue;
  });

  function handleOptionClick(index: number) {
    setActiveOption(() => {
      localStorage.setItem("tanningStyle", JSON.stringify(index));

      return index;
    });
  }

  // Render selector options
  const renderOptions = options.map((option, index) => {
    const optionClass = `slider-option${
      index === activeOption ? " active" : ""
    }`;

    return (
      <span
        key={index}
        className={optionClass}
        onClick={() => handleOptionClick(index)}
      >
        {option}
      </span>
    );
  });

  // Selector class generation for 3-position slider functionaloty
  const selectorPosition = ["left", "center", "right"];
  const selectorClass = `slider ${selectorPosition[activeOption] as string}`;

  return (
    <div className={selectorClass}>
      <div className="selector-dummy"></div>
      <div className="selector"></div>
      <div className="options-wrapper">{renderOptions}</div>
    </div>
  );
}

export default SlidingSelector;
