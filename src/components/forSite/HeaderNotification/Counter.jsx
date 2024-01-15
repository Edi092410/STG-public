import React from "react";

export const Counter = ({ count }) => {
  return (
    <div
      className={`flex justify-center items-center w-[18px] h-[18px] rounded-full bg-red-500 text-white text-xs ${
        !count || (count && count === 0) || count === "0" ? "hidden" : ""
      }`}
    >
      {count}
    </div>
  );
};
