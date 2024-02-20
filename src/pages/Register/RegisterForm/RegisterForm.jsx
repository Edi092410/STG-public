import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";
export const RegisterForm = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState({ first: "", second: "" });
  const [passwordError, setPasswordError] = useState(null);

  // Function to validate password
  const validatePassword = () => {
    if (password.first !== password.second) {
      setPasswordError("Нууц үг таарахгүй байна!");
      return false;
    } else {
      setPasswordError(null);
      return true;
    }
  };

  // Function to handle form submission
  const handleSubmit = async (values) => {
    console.log("value", values);
    try {
      await form.validateFields(); // Validate all fields
      // Password validation
      const isPasswordValid = validatePassword();

      if (!isPasswordValid) {
        throw new Error("Password mismatch");
      }

      // Remove confirmPassword field from values
      const { confirmPassword, ...formData } = values;

      // If all validations pass, submit the form
      console.log("Form values:", values);
      message.success("Амжилттай илгээгдлээ!");
    } catch (error) {
      console.error("Validation failed:", error);
      message.error("Ахин шалгана уу!.");
    }
  };
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
  return (
    <Form {...formItemLayout} form={form} onFinish={(e) => handleSubmit(e)}>
      <Form.Item
        label="Нэр"
        name={"name"}
        rules={[
          {
            required: true,
            message: "Нэрээ бичнэ үү!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Цахим хуудас"
        name={"email"}
        rules={[
          {
            required: true,
            message: "Цахим хуудсаа бичнэ үү!",
          },
          { type: "email", message: "Зөв цахим шуудан оруулна уу!" },
        ]}
      >
        <Input />
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
          onChange={(e) => setPassword({ ...password, second: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Нууц үг давтах"
        name={"confirmPassword"}
        rules={[
          {
            required: true,
            message: "Нууц үгээ давтан оруулна уу!",
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => setPassword({ ...password, first: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button htmlType="submit">Бүртгүүлэх</Button>
      </Form.Item>
      <div className=" text-red-500 w-full flex justify-center">
        {passwordError}
      </div>
    </Form>
  );
};
