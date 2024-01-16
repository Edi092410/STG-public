import React from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../hoc/layouts/SharedLayout/SharedLayout";
import { AllNotification } from "../pages/AllNotification/AllNotification";
import { Article } from "../pages/Article/Article";
import { ChangePassword } from "../pages/ChangePassword/ChangePassword";
import { Course } from "../pages/Course/Course";
import { ForgetPassword } from "../pages/ForgetPassword/ForgetPassword";
import { Login } from "../pages/Login/Login";
import { MainPage } from "../pages/MainPage/MainPage";
import { OrderList } from "../pages/OrderList/OrderList";
import { PaymentList } from "../pages/PaymentList/PaymentList";
import { QA } from "../pages/QA/QA";
import { Register } from "../pages/Register/Register";
import { Service } from "../pages/Service/Service";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="notifications" element={<AllNotification />} />
        <Route path="article" element={<Article />} />
        <Route path="course" element={<Course />} />
        <Route path="login" element={<Login />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="service" element={<Service />}>
          <Route index element={<QA />} />
          <Route path="list" element={<OrderList />} />
          <Route path="payment" element={<PaymentList />} />
        </Route>
      </Route>
    </Routes>
  );
};
