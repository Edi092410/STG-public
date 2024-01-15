import React from "react";

export const ListBody = ({ lists, seperator, hover, cursor }) => {
  return (
    <React.Fragment>
      {lists.map((list, index) => {
        {
          seperator && (index + seperator) % seperator === 0 && (
            <div className="w-full border-t-[1px] border-black"></div>
          );
        }
        <div className={`${cursor ? "cursor-pointer": ""} ${hover ? `hover:${hover} transform duration-200` : ""}`} onClick={list.func()}>{list}</div>;
      })}
    </React.Fragment>
  );
};
