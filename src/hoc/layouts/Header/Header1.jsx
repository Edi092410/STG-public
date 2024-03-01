import { Layout } from "antd";
import { useAuth } from "../../../utils/contexts/AuthProvider";
import { Navbar } from "./Navbar/Navbar";
import { AuthenticatedDropDown } from "./AuthenticatedDropDown/AuthenticatedDropDown";
import { UnauthenticateSection } from "./UnauthenticateSection/UnauthenticateSection";
const { Header } = Layout;
export const Header1 = () => {
  const { auth } = useAuth();
  const navbar = [
    { to: "/knowledge", name: "Мэдлэгийн сан" },
    { to: "/information", name: "Мэдээ, мэдээлэл" },
  ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "#1D3049",
      }}
      className=" just"
    >
      <Navbar items={navbar} />

      {auth ? (
        <AuthenticatedDropDown
          name={"Test"}
          email={"test@gmail.com"}
          notificationCount={6}
        />
      ) : (
        <UnauthenticateSection />
      )}
    </Header>
  );
};
