import { NavData } from "./Data/NavData";
import { Menu, Layout, Dropdown, Card, Badge, ConfigProvider } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../components/ui/Logo/Logo";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { NotificationData } from "../../../components/forSite/HeaderNotification/Data/NotificationData";
import { NotificationElement } from "../../../components/forSite/HeaderNotification/NotificationElement";
import { List } from "../../../components/common/List/List";
import { Element } from "../../../components/forSite/ProfileMenu/Element";
import { MenuData } from "../../../components/forSite/ProfileMenu/Data/MenuData";
const { Header } = Layout;
export const Header1 = () => {
  const [current, setCurrent] = useState("product");
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        backgroundColor: "#1D3049",
      }}
      className=" just"
    >
      <Logo />
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[current]}
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        {NavData().map((item) => {
          return (
            <Menu.Item key={item.key}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </Menu.Item>
          );
        })}
      </Menu>
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
                liclassName={` mb-4`}
              />
            </Card>
          }
        >
          <Badge count={5}>
            <div className="cursor-pointer">
              <NotificationIcon />
            </div>
          </Badge>
        </Dropdown>
        <Dropdown
          overlay={
            <Card>
              <div className="flex">
                <ProfileIcon size={40} color={"#000000"} />
                <div>
                  <div>
                    Test
                    {/* {name} */}
                  </div>
                  <div>
                    test@example.com
                    {/* {mail} */}
                  </div>
                </div>
              </div>
              <List lists={MenuData()} ListElement={Element} liclassName={""} />
              <div className=" font-semibold cursor-pointer p-2">
                Системээс гарах
              </div>
            </Card>
          }
        >
          <div className="flex items-center cursor-pointer">
            <ProfileIcon color={"#FFF"} size={25} />
            Test
            {/* {name} */}
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};
