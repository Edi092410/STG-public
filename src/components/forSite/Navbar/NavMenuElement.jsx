import { NavLink } from "react-router-dom";
export const NavMenuElement = (prop) => {
  return (
    <NavLink
      to={prop.to}
      className={({ isActive }) =>
        isActive
          ? "pb-[5px] text-[#DEDEDE] border-b-2 border-white"
          : "hover:pb-[5px] hover:border-b-2 hover:border-white  transition-all duration-300"
      }
    >
      {prop.name}
    </NavLink>
  );
};
