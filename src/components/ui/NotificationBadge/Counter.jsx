import React from "react";

export const Counter = ({ count, height, width }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full bg-red-500 text-white text-xs ${
        !count || (count && count === 0) || count === "0" ? "hidden" : ""
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {count}
    </div>
  );
};
