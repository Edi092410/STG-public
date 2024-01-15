import React from "react";
import { CancelIcon } from "../../../assets/icons/CancelIcon";
import { UpIcon } from "../../../assets/icons/UpIcon";
import { DownIcon } from "../../../assets/icons/DownIcon";
import { ThreeDotIcon } from "../../../assets/icons/ThreeDotIcon";
export const IconButton = ({
  cancel,
  up,
  down,
  threeDot,
  bgColor,
  onClickFunction,
}) => {
  const backgroundColor = bgColor ? bgColor : "rgba(0, 0, 0, 0.25)";

  return (
    <div className="relative w-full h-full">
      <div
        className=" w-full h-full flex items-center justify-center text-white text-xs cursor-pointer rounded-full transition duration-300 hover:scale-110"
        style={{
          backgroundColor: backgroundColor,
        }}
        onClick={() => {
          if (onClickFunction) {
            onClickFunction();
          }
        }}
      >
        {cancel && <CancelIcon />}
        {up && <UpIcon />}
        {down && <DownIcon />}
        {threeDot && <ThreeDotIcon />}
      </div>
    </div>
  );
};
