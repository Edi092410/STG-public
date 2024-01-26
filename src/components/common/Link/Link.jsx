import { NavLink } from "react-router-dom";
export const Link = ({ children, to }) => {
  return <NavLink to={to}>{children}</NavLink>;
};
