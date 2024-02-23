import { Layout } from "antd";
const { Footer } = Layout;
export const Footer1 = () => {
  return (
    <Footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "#1D3049",
      }}
    >
      <div>
        <div>location</div>
        <div>phone</div>
      </div>
      <div>test@test.com</div>
    </Footer>
  );
};

// import React from "react";
// import classes from "./Footer.module.css";

// // import styles "."
// export const Footer = () => {
//   //   return <AppBar>Footer</AppBar>;
//   return <div className={`${classes.footer} h-16`}>Footer</div>;
// };
