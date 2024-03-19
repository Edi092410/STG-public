import { Outlet } from "react-router-dom";
import { Header1 } from "../Header/Header1";
import { Footer1 } from "../Footer1/Footer1";
export const SharedLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
      <Header1 />
      <div className="lg:mx-[10vw]">
        <Outlet />
      </div>
      <Footer1 />
    </div>
  );
};
