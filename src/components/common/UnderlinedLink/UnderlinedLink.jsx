import { NavLink } from "react-router-dom";
export const UnderlinedLink = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      // className={({ isActive }) =>
      //   isActive
      //     ? "pb-[5px] border-b-2 border-white transition-all duration-300"
      //     : "hover:pb-[5px] hover:border-b-2 hover:border-white transition-all duration-300"
      // }
      className={({ isActive }) =>
        isActive
          ? "pb-[5px] border-b-2 border-black transition-all duration-300"
          : "hover:pb-[5px] hover:border-b-2 hover:border-black transition-all duration-300"
      }
    >
      {name}
    </NavLink>
  );
};
