import { Dropdown, Card } from "antd";
import { List } from "../../../../components/common/List/List";
import { ProfileIcon } from "../../../../assets/icons/ProfileIcon";
import { Element } from "../../../../components/forSite/ProfileMenu/Element";
import { MenuData } from "../../../../components/forSite/ProfileMenu/Data/MenuData";
import { useAuth } from "../../../../utils/contexts/AuthProvider";
import { HeaderNotification } from "../../../../components/forSite/HeaderNotification/HeaderNotification";

export const AuthenticatedDropDown = ({ name, email }) => {
  const { setAuth } = useAuth();
  return (
    <div className="flex items-center gap-x-4 h-fit">
      <Dropdown
        overlay={
          <Card>
            <div className="flex items-center">
              <ProfileIcon size={40} color={"#000000"} />
              <div>
                <div>{name}</div>
                <div>{email}</div>
              </div>
            </div>
            <List lists={MenuData()} ListElement={Element} liclassName="" />
            <div
              className="font-semibold cursor-pointer p-2"
              onClick={() => {
                localStorage.clear();
                setAuth(false);
              }}
            >
              Системээс гарах
            </div>
          </Card>
        }
      >
        <div className="flex items-center cursor-pointer">
          <ProfileIcon color={"#FFF"} size={25} />
          <div className="ml-1">{name}</div>
        </div>
      </Dropdown>

      <HeaderNotification />
    </div>
  );
};
