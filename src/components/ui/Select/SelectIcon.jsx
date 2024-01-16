import React from "react";
import { ThinDownIcon } from "../../../assets/icons/ThinDownIcon";
import { ThickDownIcon } from "../../../assets/icons/ThickDownIcon";

export const SelectIcon = ({ isOpened, icon, iconColor }) => {
  const renderIcon = () => {
    const IconComponent = icon === "thin" ? ThinDownIcon : ThickDownIcon;
    return (
      <div className=" pointer-events-none">
        <IconComponent color={iconColor} />
      </div>
    );
  };
  return (
    <div
      className={`flex items-center cursor-pointer pointer-events-none ${
        isOpened ? "rotate-180" : ""
      }`}
    >
      {renderIcon()}
    </div>
  );
};
