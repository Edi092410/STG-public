import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { PostDataService } from "../../../backend/axios/AxiosService2";
import { useAuth } from "../../../utils/contexts/AuthProvider";
import { useState } from "react";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const { state: locationState } = useLocation();
  const handleSubmit = async (values) => {
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
      console.error("Validation failed:", error);
      message.error("Ахин шалгана уу!.");
    }
  };
  return (
    <Form {...formItemLayout} form={form} onFinish={(e) => handleSubmit(e)}>
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
            min: 8,
            message: "Нууц үг нь хамгийн багадаа 8 тэмдэгтээс тогтох ёстой!",
          },
          {
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
            message:
              "Хамгийн багадаа нэг том үсэг, нэг тоо, нэг тусгай тэмдэгт агуулна!",
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <div className="text-red-500">{errMsg}</div>
        <Button htmlType="submit">Нэвтрэх</Button>
      </Form.Item>
      <div className="flex justify-around">
        <div className="cursor-pointer " onClick={() => navigate("/register")}>
          Бүргүүлэх
        </div>
        <div>Нууц үг мартсан</div>
      </div>
    </Form>
  );
};
