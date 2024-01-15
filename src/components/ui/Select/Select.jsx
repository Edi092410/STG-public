import React, { useState, useRef } from "react";
import { ThickDownIcon } from "../../../assets/icons/ThickDownIcon";
import { ThinDownIcon } from "../../../assets/icons/ThinDownIcon";
import useOutsideClick from "../../../utils/hooks/useOutsideClick";
export const Select = ({
  selected,
  selectedOption,
  onSelectedChange,
  options,
  optionId,
  location,
  appearance,
  icon,
}) => {
  const handleChange = (e) => {
    onSelectedChange(e.target.value);
  };
  useState(() => {
    if (selected) {
      onSelectedChange(selected);
    }
  }, [selected, onSelectedChange]);
  const menuRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  useOutsideClick(isOpened, () => setIsOpened(false));
  const renderIcon = () => {
    const IconComponent = icon === "thin" ? ThinDownIcon : ThickDownIcon;
    const iconColor = "#FFF"; // Set your desired icon color
    return <IconComponent color={iconColor} />;
  };

  return (
    <div
      className="relative inline-block"
      ref={menuRef}
      onClick={() => {
        setIsOpened(!isOpened);
      }}
    >
      <select
        className={`${
          appearance === "none" && "appearance-none"
        } w-fit h-[30px] bg-transparent focus:outline-none cursor-pointer mr-6 ${
          location === "left"
            ? "text-left"
            : location === "center"
            ? "text-center"
            : "text-right"
        }`}
        defaultValue={selectedOption}
        onChange={handleChange}
      >
        {options && options.length > 0 ? (
          options.map((prop) => (
            <option
              className="text-black"
              value={prop[optionId]}
              key={prop[optionId]}
            >
              {prop.name.split("[")[0]}
            </option>
          ))
        ) : (
          <option>Сонголт байхгүй</option>
        )}
      </select>
      <div
        className={`absolute inset-y-4 right-0 flex items-center cursor-pointer pointer-events-none ${
          isOpened ? "rotate-180" : ""
        }`}
      >
        {renderIcon()}
      </div>
    </div>
  );
};
