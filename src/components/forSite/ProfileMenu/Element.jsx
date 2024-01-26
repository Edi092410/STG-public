import { NavLink } from "react-router-dom";
export const Element = (prop) => {
  return (
    <NavLink to={prop.to}>
      <div className={` hover:bg-slate-200 transition duration-200 p-2`}>
        {prop.name}
      </div>
    </NavLink>
  );
};
