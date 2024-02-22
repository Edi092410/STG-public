import { Outlet } from "react-router-dom";
import { Header1 } from "../Header/Header1";
import { Footer } from "../Footer/Footer";
export const SharedLayout = () => {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[auto,1fr,auto]">
      <Header1 />
      <div className="lg:mx-[10%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
