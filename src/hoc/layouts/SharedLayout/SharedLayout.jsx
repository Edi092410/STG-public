import { Outlet } from "react-router-dom";
import { Header1 } from "../Header/Header1";
import { Footer } from "../Footer/Footer";
export const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <div className=" flex-1 bg-slate-300  lg:mx-[10%] border-2 border-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
