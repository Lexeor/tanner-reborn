import React, { useState } from "react";

type Props = {
  options: string[];
};

function SlidingSelector({ options }: Props) {
  const [activeOption, setActiveOption] = useState(0);

  function handleOptionClick(index: number) {
    setActiveOption(index);
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
