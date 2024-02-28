import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb1 } from "../../components/common/Breadcrumb1/Breadcrumb1";
const { Content, Sider } = Layout;
export const Dashboard = () => {
  const location = useLocation();
  console.log("location", location);
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
  console.log("pathname", location.pathname);

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
                  {/* <Menu.Item>
                    <div onClick={() => console.log("Logging out")}>Гарах</div>
                  </Menu.Item> */}
                  <Button className="w-full">Гарах</Button>
                </div>
              </Menu>
            </div>
          </Sider>
          <Content className="h-full">
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
