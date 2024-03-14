import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { PostData } from "../../../backend/axios/AxiosAdmin";

export const RegisterForm = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState({ first: "", second: "" });
  const [passwordError, setPasswordError] = useState(null);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      await form.validateFields(); // Validate all fields
      // Password validation
      const isPasswordValid = validatePassword();

      if (!isPasswordValid) {
        throw new Error("Password mismatch");
      }

      // Remove confirmPassword field from values
      delete values.confirmPassword;

      const response = await PostData("/register", values);

      if (response.request.status === 200) {
        token = response.data.data.token;
        message.success(response?.data?.message);
        // Send verification email
        if (window.Email) {
          window.Email.send({
            SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
            To: values.email,
            From: "m.erdenebayar.siticom@gmail.com",
            Subject: "Цахим хаягаа баталгаажуулах",
            Body: `<html>
            <head>
              <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
              }
    
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
              }
              .header{
                display: flex;
              }
    
              .header img {
                max-width: 30px;
                max-height: 30px;
                height: auto;
                border-radius: 10px;
              }
    
              .header h1 {
                font-size: 24px;
                color: #333333;
                margin-left: 10px;
                margin-top: 0;
              }
    
              .content {
                margin-top: 20px;
                font-size: 16px;
                color: #555555;
              }
    
              .content a {
                color: #007bff;
                text-decoration: none;
              }
    
              .footer {
                margin-top: 20px;
                font-size: 14px;
                color: #888888;
              }
            </style>
    
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://admin.e-siticom.com/storage/logo.jpeg" alt="Logo" />
                  <h1>Санхүүгийн Тооцоолох Групп Компани</h1>
                </div>
                <div class="content">
                  <p>Эрхэм хэрэглэгч ${values.name} танд энэ өдрийн мэнд хүргэе!</p>
                  <p>Та STG веб сайтын хэрэглэгчээр бүртгүүлсэн байна.</p>
                  <p>Танд хэрэглэгчийн цахим шуудангаа баталгаажуулах доорх холбоос-ыг илгээлээ. <a href="https://e-siticom.com/verification?token=${token}">Холбоос</a> дээр дарж өөрийгөө баталгаажуулна уу.</p>    
                </div>
                <div class="footer">
                  <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
                </div>
              </div>
            </body>
            </html>`,
          }).then((msg) => message.success(msg));
        } else if (response.request.status === 400) {
          setPasswordError("Мэдээллээ шалгана уу!");
        } else if (response.request.status === 500) {
          setPasswordError("Сүлжээнд асуудал гарсан байна.");
        }
      }
    } catch (error) {
      console.error("Validation failed:", error);
      message.error("Алдаа гарлаа. Ахин шалгана уу.");
    } finally {
      setLoading(false);
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
