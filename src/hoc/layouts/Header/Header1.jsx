import { AppBar } from "../../../components/common/AppBar/AppBar";
import Navbar from "../../../components/forSite/Navbar/Navbar";
import { NavData } from "./Data/NavData";
import { CompanyData } from "./Data/CompanyData";
import { Menu, Layout, Dropdown, Card, Badge, ConfigProvider } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../components/ui/Logo/Logo";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { Select1 } from "../../../components/ui/Select/Select";
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
  const renderMenuItems = (data) => {
    return data.map((item) => {
      if (item.subLinks) {
        return (
          <Menu.SubMenu key={item.key} title={item.name}>
            {item.subLinks.map((sublink) => (
              <Menu.Item
                key={sublink.key}
                style={{ display: "flex", alignItems: "center" }}
                // className=" flex item"
                icon={
                  <img
                    src={sublink.image}
                    alt={sublink.name}
                    style={{ height: "100%" }}
                  />
                }
              >
                <NavLink to={sublink.to}>{sublink.name}</NavLink>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.to}>{item.name}</NavLink>
        </Menu.Item>
      );
    });
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
      <Logo text={"Санхүүгийн Тооцоолох Групп"} width={200} />
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[current]}
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        {renderMenuItems(NavData())}
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
                lists={NotificationData().slice(0, 10)}
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
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "transparent",
                colorBorder: "transparent",
                // colorText: "#FFF",
              },
              Dropdown: {
                colorText: "#FFF",
              },
            },
          }}
        >
          <Select1
            data={CompanyData()}
            label="name"
            value="customerId"
            defaultValue={"f50e-fcc6-49f4-b5sdkfj-566541skdj"}
            size={"small"}
            width={200}
          />
        </ConfigProvider>
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
