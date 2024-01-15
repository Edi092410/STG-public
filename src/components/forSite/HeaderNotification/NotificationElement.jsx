import React from "react";
import { Hour24Icon } from "../../../assets/icons/Hour24Icon";
import { SingleNotification } from "./SingleNotification";
export const NotificationElement = ({
  text,
  seen,
  date,
  //   customerId,
  //   number,
  //   id,
  //   reRender,
  //   RemoveOne,
}) => {
  const onClick = () => {
    setModal(true);
    // markSeen();
  };
  return (
    <div className={`flex text-xs ${seen ? "text-[#7B7B7B]" : " text-white"}`}>
      <div className="flex flex-col justify-center w-[10%] mr-[10px]">
        <div
          className={`flex items-center justify-center w-[30px] h-[30px] rounded-full ${
            seen ? "bg-[#7B7B7B]" : "bg-white"
          }`}
        >
          <Hour24Icon />
        </div>
        <div className="text-[8px] flex-shrink">Үйлчилгээ</div>
      </div>
      <div>
        <SingleNotification
          text={text}
          date={date}
          onClick={onClick}
          seen={seen}
        />
      </div>
    </div>
  );
};
