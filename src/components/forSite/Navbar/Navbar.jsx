import React, { useState } from "react";
import { Menu, Badge, Dropdown } from "antd";
import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Logo } from "../../ui/Logo/Logo";

const Navbar = ({ navData, companyData }) => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");

  const items = [
    {
      label: "Navigation One",
      key: "mail",
    },
    {
      label: "Navigation Two",
      key: "app",
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="h-full flex items-center justify-around">
      <Logo text={"Санхүүгийн Тооцоолох Групп"} width={120} />
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) =>
          item.children ? (
            <SubMenu key={item.key} title={item.label}>
              {item.children.map((child) =>
                child.type === "group" ? (
                  <Menu.ItemGroup key={child.label} title={child.label}>
                    {child.children.map((option) => (
                      <Menu.Item key={option.key}>{option.label}</Menu.Item>
                    ))}
                  </Menu.ItemGroup>
                ) : (
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          )
        )}
      </Menu>
      <div className="flex justify-center gap-x-4">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Test
              </Menu.Item>
              <Menu.Item key="2">test@example.com</Menu.Item>
            </Menu>
          }
        >
          <Badge count={5}>
            <BellOutlined style={{ fontSize: "24px", color: "#FFF" }} />
          </Badge>
        </Dropdown>

        <Select
          location={"right"}
          icon={<SettingOutlined style={{ fontSize: "20px", color: "#FFF" }} />}
          appearance={"none"}
          options={companyData}
          optionId={"customerId"}
          size="small"
        />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Test
              </Menu.Item>
              <Menu.Item key="2">test@example.com</Menu.Item>
            </Menu>
          }
        >
          <div>
            <UserOutlined style={{ fontSize: "16px", color: "#FFF" }} />
            Test
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
