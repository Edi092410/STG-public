import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
export const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className=" flex-1 bg-slate-300  lg:mx-[10%] border-2 border-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
