import React from "react";
import { DateResult } from "../../../utils/functions/DateResult";
export const SingleNotification = ({ text, onClick, date, seen }) => {
  return (
    <div>
      <div className={`cursor-pointer`} onClick={onClick}>
        {text}
      </div>
      <div className={`${!seen && "text-[#0496D4]"}`}>
        {DateResult({ date: date })}
      </div>
    </div>
  );
};
