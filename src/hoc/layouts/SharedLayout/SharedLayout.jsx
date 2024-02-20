import { Outlet } from "react-router-dom";
import { Header1 } from "../Header/Header1";
import { Footer } from "../Footer/Footer";
export const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <div className=" flex-1 lg:mx-[10%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
