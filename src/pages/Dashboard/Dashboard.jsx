import React, { useState } from "react";
import { Button, Layout, Menu, Modal, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb1 } from "../../components/common/Breadcrumb1/Breadcrumb1";
import { useAuth } from "../../utils/contexts/AuthProvider";
import ConfigProvider, { ConfigConsumer } from "antd/es/config-provider";

const { Content, Sider } = Layout;
const items = [
  {
    label: "Захиалга",
    to: "/dashboard/service",
    key: "service",
  },
  {
    label: "Төлбөр тооцоо",
    to: "/dashboard/payment",
    key: "payment",
  },
  {
    label: "Хичээл",
    to: "/dashboard/course",
    key: "course",
  },
];

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setAuth } = useAuth();
  const location = useLocation();

  const pathname = () => {
    if (location.pathname === "/dashboard") return null;
    else if (location.pathname === "/dashboard/payment") return "Төлбөр тооцоо";
    else if (location.pathname === "/dashboard/service") return "Үйлчилгээ";
    else if (location.pathname === "/dashboard/course") return "Сургалт";
    else return "Хичээл";
  };
  const firstItems = [
    {
      title: <Link to={"/"}>Нүүр</Link>,
    },
    {
      title: "Хянах самбар",
    },
  ];

  const secondItems = [
    {
      title: <Link to={"/"}>Нүүр</Link>,
    },
    {
      title: <Link to={"/dashboard"}>Хянах самбар</Link>,
    },
    {
      title: pathname(),
    },
  ];

  const thirdItem = [
    {
      title: <Link to={"/"}>Нүүр</Link>,
    },
    {
      title: <Link to={"/dashboard"}>Хянах самбар</Link>,
    },
    {
      title: <Link to={"/dashboard/course"}>Сургалт</Link>,
    },
    {
      title: pathname(),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {},
          Button: {
            colorBgTextHover: "rgb(241 245 249)",
          },
        },
      }}
    >
      <Layout className="h-full w-full bg-transparent">
        <Breadcrumb1
          items={
            location.pathname === "/dashboard"
              ? firstItems
              : location.pathname.startsWith("/dashboard/courseWatch")
              ? thirdItem
              : secondItems
          }
          className="my-4 "
        />
        <Content style={{ backgroundColor: "transparent", marginBottom: 16 }}>
          <Layout className="h-full">
            <Sider width={"20%"} style={{ backgroundColor: colorBgContainer }}>
              <div className="h-full">
                <Menu className="flex flex-col justify-between h-full">
                  {items.map((item, index) => (
                    <Menu.Item key={index}>
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
                      // classNames={` `}
                    >
                      Гарах
                    </Button>
                  </div>
                </Menu>
              </div>
            </Sider>
            <Content className="h-full">
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <Modal
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button
              onClick={() => {
                setAuth(false);
                localStorage.clear();
              }}
            >
              Гарах
            </Button>,
          ]}
          title={"Та системээс гарах гэж байна."}
        />
      </Layout>
    </ConfigProvider>
  );
};
