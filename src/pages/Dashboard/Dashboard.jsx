import React, { useState } from "react";
import { Button, Divider, Layout, Menu, Modal, message, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb1 } from "../../components/common/Breadcrumb1/Breadcrumb1";
import { useAuth } from "../../utils/contexts/AuthProvider";
import {
  PhoneOutlined,
  UnorderedListOutlined,
  ReadOutlined,
  EditOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";

const { Content, Sider } = Layout;

const items = [
  {
    label: "Захиалга",
    to: "/dashboard/service",
    key: "service",
    icon: <PhoneOutlined />,
  },
  {
    label: "Төлбөр тооцоо",
    to: "/dashboard/payment",
    key: "payment",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Сургалт",
    to: "/dashboard/course",
    key: "course",
    icon: <ReadOutlined />,
  },
];

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // State to manage collapsed state
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  const { setAuth } = useAuth();
  const location = useLocation();

  // Function to determine breadcrumb based on current location
  const getBreadcrumbItems = () => {
    if (location.pathname === "/dashboard") {
      return [{ title: <Link to={"/"}>Нүүр</Link> }, { title: "Хянах самбар" }];
    } else {
      return [
        { title: <Link to={"/"}>Нүүр</Link> },
        { title: <Link to={"/dashboard"}>Хянах самбар</Link> },
        {
          title:
            location.pathname === "/dashboard/course" ? "Сургалт" : "Хичээл",
        },
      ];
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setAuth(false);
    localStorage.clear();
    message.success("Системээс гарлаа.");
  };
  return (
    <Layout className="h-full w-full bg-transparent">
      <Breadcrumb1 items={getBreadcrumbItems()} className="my-4 " />
      <Content
        style={{
          backgroundColor: "transparent",
          marginBottom: 16,
        }}
      >
        <Layout className="h-full">
          <Sider
            width={250} // Set initial width for larger screens
            collapsible
            collapsed={collapsed}
            onCollapse={handleToggle}
            collapsedWidth={50}
            style={{
              backgroundColor: theme.useToken().colorBgContainer,
            }}
            className="z-10 shadow-lg h-full"
            trigger={null}
          >
            <div className="h-full">
              <Menu className="flex flex-col h-full">
                <div className="flex items-center justify-between my-1 py-3 mx-[2px] border-b border-slate-200">
                  {collapsed === false && (
                    <div className="ml-4 flex items-center transition duration-200">
                      <div className="flex items-center justify-center mr-2 rounded-full border border-black">
                        <UserOutlined />
                      </div>
                      {localStorage.getItem("name").substring(0, 20)}
                    </div>
                  )}
                  <Button
                    type="text"
                    onClick={handleToggle}
                    className=" w-fit flex items-center justify-center"
                  >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </Button>
                </div>

                {items.map((item) => (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.to}>{item.label}</Link>
                  </Menu.Item>
                ))}
                <Divider />
                <Menu.Item key="changeInformation" icon={<EditOutlined />}>
                  <Link to={""}>Мэдээлэл засах</Link>
                </Menu.Item>
                <Menu.Item
                  key={`logOut`}
                  icon={<LogoutOutlined />}
                  onClick={() => setIsModalOpen(true)}
                >
                  Гарах
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Content className="h-full bg-white ml-0 sm:ml-250">
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="logout" onClick={handleLogout}>
            Гарах
          </Button>,
        ]}
        title="Та системээс гарах гэж байна."
      />
    </Layout>
  );
};
