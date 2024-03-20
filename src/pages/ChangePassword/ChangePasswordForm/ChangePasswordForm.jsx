import { Button, Divider, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { PostDataService } from "../../../backend/axios/AxiosService2";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export const ChangePasswordForm = () => {
  const [form] = Form.useForm();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  // Function to handle form submission
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await form.validateFields(); // Validate all fields
      e.email = email;
      const response = await PostDataService("/users/resetpassword", e);
      if (response.request.status === 400) {
        setErr("Системээс өгсөн нууц үг таарахгүй байна.");
      } else if (response.request.status === 200) {
        Notify({ text: "Амжилттай солигдлоо.", success: true });
        navigate("/");
      }
    } catch (error) {
      console.error("Validation failed:", error);
      message.error("Алдаа гарлаа. Ахин шалгана уу.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form layout="vertical" form={form} onFinish={(e) => handleSubmit(e)}>
      <h2 className=" text-lg font-semibold">Нууц үг солих</h2>
      <Divider />
      <Form.Item
        label="Системээс өгсөн нууц үг"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Системээс өгсөн нууц үгийг оруулна уу!",
          },
          {
            min: 6,
            message: "Нууц үг нь хамгийн багадаа 6 тэмдэгтээс тогтох ёстой!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        label="Шинэ нууц үг"
        name={"newPassword"}
        rules={[
          {
            required: true,
            message: "Шинэ нууц үгээ оруулна уу!",
          },
          {
            min: 6,
            message: "Нууц үг нь хамгийн багадаа 6 тэмдэгтээс тогтох ёстой!",
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item>
        <div className="text-red-500">{err}</div>
        <Button htmlType="submit" loading={loading} className=" w-full">
          Нууц үг солих
        </Button>
      </Form.Item>
    </Form>
  );
};
