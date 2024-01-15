import React from "react";
import { NavLink } from "react-router-dom";
export const NavMenu = ({navData}) => {
  return (
    <div>
      <ul className="flex lg:flex-row flex-col text-white text-[12px] 3xl:text-base lg:items-center gap-[6vh] lg:gap-0 ml-4 lg:ml-0 text-left">
        {navData.map((prop, index) => (
          <li
            key={prop.key}
            className={({ isActive }) =>
              isActive
                ? "pb-[5px] border-b-2 border-white"
                : "hover:pb-[5px] hover:border-b-2 hover:border-white  transition-all duration-300"
            }
            style={{ marginRight: "20px" }}
          >
            {prop.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
