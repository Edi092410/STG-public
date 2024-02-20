import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
export const LoginForm = () => {
  const [form] = Form.useForm();
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
  const handleSubmit = async (values) => {
    console.log("value", values);
    try {
      await form.validateFields(); // Validate all fields

      // If all validations pass, submit the form
      console.log("Form values:", values);
      message.success("Амжилттай илгээгдлээ!");
    } catch (error) {
      console.error("Validation failed:", error);
      message.error("Ахин шалгана уу!.");
    }
  };
  return (
    <Form {...formItemLayout} form={form} onFinish={(e) => handleSubmit(e)}>
      <Form.Item
        label="Нэр"
        name={"name"}
        rules={[{ required: true, message: "Нэвтрэх нэрээ оруулна уу!" }]}
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
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button htmlType="submit">Нэвтрэх</Button>
      </Form.Item>
      {/* <div className="flex justify-around">
        <div>Бүргүүлэх</div>
        <div>Нууц үг мартсан</div>
      </div> */}
    </Form>
  );
};
