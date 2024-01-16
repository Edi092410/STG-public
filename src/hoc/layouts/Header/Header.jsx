import React from "react";
import { AppBar } from "../../../components/common/AppBar/AppBar";
import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  return (
    <div className=" text-white">
      <AppBar>
        <Navbar />
      </AppBar>
    </div>
  );
};
