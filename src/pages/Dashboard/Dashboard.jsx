import React, { useState } from "react";
import { Button, Layout, Menu, Modal, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb1 } from "../../components/common/Breadcrumb1/Breadcrumb1";
import { useAuth } from "../../utils/contexts/AuthProvider";
import "./style.css";

const { Content, Sider } = Layout;

const items = [
  { label: "Захиалга", to: "/dashboard/service", key: "service" },
  { label: "Төлбөр тооцоо", to: "/dashboard/payment", key: "payment" },
  { label: "Сургалт", to: "/dashboard/course", key: "course" },
];

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // State to manage collapsed state

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
  };
  return (
    <Layout className="h-full w-full bg-transparent">
      <Breadcrumb1 items={getBreadcrumbItems()} className="my-4 " />
      <Content style={{ backgroundColor: "transparent", marginBottom: 16 }}>
        <Layout className="h-full">
          <Sider
            width={250} // Set initial width for larger screens
            collapsible
            collapsedWidth={0}
            style={{
              backgroundColor: theme.useToken().colorBgContainer,
            }}
            className="z-10"
          >
            <div className="h-full">
              <Menu className="flex flex-col justify-between h-full">
                {items.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.to}>{item.label}</Link>
                  </Menu.Item>
                ))}
                <div className="mt-auto">
                  <Menu.Item>
                    <Link to={""}>Мэдээлэл засах</Link>
                  </Menu.Item>
                  <Button
                    className="w-full"
                    onClick={() => setIsModalOpen(true)}
                    style={{
                      border: 0,
                      boxShadow: "none",
                      marginLeft: "5px",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    Гарах
                  </Button>
                </div>
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
          <Button key="logout" type="primary" onClick={handleLogout}>
            Гарах
          </Button>,
        ]}
        title="Та системээс гарах гэж байна."
      />
    </Layout>
  );
};
