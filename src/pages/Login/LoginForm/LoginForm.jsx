import { Button, Divider, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { PostDataService } from "../../../backend/axios/AxiosService2";
import { useAuth } from "../../../utils/contexts/AuthProvider";
import { useState } from "react";
export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const { state: locationState } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Validate all fields
      await form.validateFields();
      // If all validations pass, submit the form
      console.log("Form values:", values);
      const response = await PostDataService("/users/authenticate", values);
      console.log("response", response);
      if (response.status === 200) {
        // role?
        localStorage.setItem("name", response?.data?.user?.username);
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("companies", JSON.stringify(response.data.orgs));
        localStorage.setItem(
          "notificationCount",
          response?.data?.notificationCount
        );
        message.success("Амжилттай нэвтэрлээ!");
        setAuth(true);
        if (locationState) {
          navigate(
            `${locationState.redirectTo.pathname}${locationState.redirectTo.search}`
          );
        } else navigate("/");
      } else if (response?.response?.data?.success === false) {
        setErrMsg(response?.response?.data?.msg);
      } else if (response?.response?.request?.status === 500)
        setErrMsg("Сүлжээнд асуудал гарлаа");
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        // Connection timeout occurred
        setErrMsg("Холболт хугацаа дууссан");
      } else {
        // Other errors
        message.error("Ахин шалгана уу!.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form layout="vertical" form={form} onFinish={(e) => handleSubmit(e)}>
      <h2 className=" text-lg font-semibold">Нэвтрэх</h2>
      <div className=" text-gray-400">
        Бүртгэл хийгдээгүй бол{" "}
        <span
          className=" text-stg-color cursor-pointer underline"
          onClick={() => navigate("/register")}
        >
          Бүртгүүлэх
        </span>
      </div>
      <Divider />
      <Form.Item
        label="Цахим шуудан"
        name={"email"}
        rules={[{ required: true, message: "Цахим шуудангаа оруулна уу!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Нууц үг"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Нууц үгээ оруулна уу!",
          },
          {
            min: 6,
            message: "Нууц үг нь хамгийн багадаа 6 тэмдэгтээс тогтох ёстой!",
          },
          // {
          //   pattern:
          //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
          //   message:
          //     "Хамгийн багадаа нэг том үсэг, нэг тоо, нэг тусгай тэмдэгт агуулна!",
          // },
        ]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <div className=" underline" onClick={() => navigate("/forgetpassword")}>
        Нууц үг мартсан
      </div>
      <Form.Item>
        <div className="text-red-500">{errMsg}</div>
        <Button htmlType="submit" loading={loading} className=" w-full">
          Нэвтрэх
        </Button>
      </Form.Item>
    </Form>
  );
};
