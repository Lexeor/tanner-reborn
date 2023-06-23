import React, { useState, useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  list: string[];
  setWeatherCity: (city: string) => void;
};

function Dropdown({ list, setWeatherCity }: Props) {
  const wrapperRef = useRef<any>(null);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useLocalStorage<string>(
    "weatherCity",
    list[0]
  );

  console.log(selectedItem);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleDropDown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const onClickHandler = (item: string): void => {
    setSelectedItem(() => {
      toggleDropDown();
      return item;
    });
    setWeatherCity(item);
  };

  //Render list
  const renderList = list.map((item: string, index: number) => {
    return (
      <p
        key={index}
        onClick={(): void => {
          onClickHandler(item);
        }}
      >
        {item}
      </p>
    );
  });

  return (
    <div
      className={showDropDown ? "dropdown-wrapper" : "dropdown-wrapper active"}
      ref={wrapperRef}
    >
      <div className="dropdown-value" onClick={toggleDropDown}>
        {selectedItem}
      </div>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {renderList}
      </div>
    </div>
  );
}

export default Dropdown;
