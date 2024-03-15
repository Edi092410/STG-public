import { Dropdown, message, Menu } from "antd";
import { ProfileIcon } from "../../../../assets/icons/ProfileIcon";
import { useAuth } from "../../../../utils/contexts/AuthProvider";
import { HeaderNotification } from "../../../../components/forSite/HeaderNotification/HeaderNotification";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../../../../components/forSite/ProfileMenu/ProfileMenu";

export const AuthenticatedDropDown = ({ name, email }) => {
  const { setAuth } = useAuth();

  // Function to handle logout
  const handleLogout = () => {
    setAuth(false);
    localStorage.clear();
    message.success("Системээс гарлаа.");
  };
  return (
    <div className="flex items-center gap-x-4 h-fit">
      <ProfileMenu name={name} email={email} handleLogout={handleLogout} />
      <HeaderNotification />
    </div>
  );
};
