import React, { useState, useRef } from "react";
import { SelectIcon } from "./SelectIcon";
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
  iconColor,
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

  return (
    <div className="w-fit">
      <div
        className="relative inline-block"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        ref={menuRef}
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
        <div className="absolute top-1 right-0">
          <SelectIcon isOpened={isOpened} icon={icon} iconColor={iconColor} />
        </div>
      </div>
    </div>
  );
};
