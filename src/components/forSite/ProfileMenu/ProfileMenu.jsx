import React from "react";
import { Dropdown, Menu } from "antd";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
import { Link } from "react-router-dom";
import { LineChartOutlined, LogoutOutlined } from "@ant-design/icons";
export const ProfileMenu = ({ name, email, handleLogout }) => {
  return (
    <Dropdown
      overlay={
        <Menu style={{ padding: 20 }}>
          <div className="flex items-center">
            <ProfileIcon size={40} color={"#000000"} />
            <div>
              <div>{name}</div>
              <div>{email}</div>
            </div>
          </div>
          <Menu.Item key={"dashboard"} icon={<LineChartOutlined />}>
            <Link to={`/dashboard`}>Хянах самбар</Link>
          </Menu.Item>
          <Menu.Item
            className=" font-semibold"
            icon={<LogoutOutlined />}
            key={`Log out`}
            onClick={handleLogout}
          >
            Системээс гарах
          </Menu.Item>
        </Menu>
      }
    >
      <div className="flex items-center cursor-pointer">
        <ProfileIcon color={"#000"} size={25} />
        <div className="ml-1">{name}</div>
      </div>
    </Dropdown>
  );
};
