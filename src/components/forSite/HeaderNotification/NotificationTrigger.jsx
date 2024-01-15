import React from "react";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { Counter } from "./Counter";
export const NotificationTrigger = ({ count }) => {
  return (
    <div className="w-7 h-7 relative">
      <NotificationIcon />
      <div className="absolute -top-1 -right-1">
        <Counter count={count} />
      </div>
    </div>
  );
};
