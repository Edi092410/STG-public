import { Dropdown, Card, Badge } from "antd";
import { List } from "../../../../components/common/List/List";
import { ProfileIcon } from "../../../../assets/icons/ProfileIcon";
import { NotificationIcon } from "../../../../assets/icons/NotificationIcon";
import { NotificationData } from "../../../../components/forSite/HeaderNotification/Data/NotificationData";
import { NotificationElement } from "../../../../components/forSite/HeaderNotification/NotificationElement";
import { Element } from "../../../../components/forSite/ProfileMenu/Element";
import { MenuData } from "../../../../components/forSite/ProfileMenu/Data/MenuData";
import { useAuth } from "../../../../utils/contexts/AuthProvider";

export const AuthenticatedDropDown = ({ name, notificationCount, email }) => {
  const { setAuth } = useAuth();
  return (
    <div className="flex items-center gap-x-4 h-fit">
      <Dropdown
        overlay={
          <Card
            style={{
              backgroundColor: "#1D3049",
              borderWidth: 0,
              width: "400px",
            }}
          >
            <List
              lists={NotificationData().slice(0, 5)}
              ListElement={NotificationElement}
              liclassName={`mb-4`}
            />
          </Card>
        }
      >
        <Badge count={notificationCount}>
          <div className="cursor-pointer">
            <NotificationIcon />
          </div>
        </Badge>
      </Dropdown>
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
          {name}
        </div>
      </Dropdown>
    </div>
  );
};
