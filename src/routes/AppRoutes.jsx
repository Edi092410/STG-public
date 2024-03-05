import React from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../hoc/layouts/SharedLayout/SharedLayout";
import { AllNotification } from "../pages/AllNotification/AllNotification";
import { ChangePassword } from "../pages/ChangePassword/ChangePassword";
import { Course } from "../pages/Course/Course";
import { ForgetPassword } from "../pages/ForgetPassword/ForgetPassword";
import { Login } from "../pages/Login/Login";
import { MainPage } from "../pages/MainPage/MainPage";
import { OrderList } from "../pages/OrderList/OrderList";
import { PaymentPage } from "../pages/PaymentPage/PaymentPage";
import { Register } from "../pages/Register/Register";
import { RegisterFiscus } from "../pages/RegisterFiscus/RegisterFiscus";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Summary } from "../pages/Summary/Summary";
import { CourseWatch } from "../pages/CourseWatch/CourseWatch";
import { PrivateRoute } from "./PrivateRoute";
import { Knowledge } from "../pages/Knowledge/Knowledge";
import { Information } from "../pages/Information/Information";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="notifications" element={<AllNotification />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Summary />} />
            <Route path="service" element={<OrderList />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="course" element={<Course />} />
            <Route path="courseWatch/:id" element={<CourseWatch />} />
          </Route>
        </Route>
        <Route path="information" element={<Information />} />
        <Route path="knowledge" element={<Knowledge />} />
        <Route path="login" element={<Login />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="registration" element={<RegisterFiscus />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="w-screen h-screen flex items-center justify-center text-2xl">
            404 Not Found
          </div>
        }
      />
    </Routes>
  );
};
