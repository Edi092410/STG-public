import { Button, Form, Input, Select, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GetDataService,
  PostDataService,
} from "../../../backend/axios/AxiosService2";
export const RegisterFrom = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState({ first: "", second: "" });

  const [errorMsg, setErrorMsg] = useState(null);
  const [hash, setHash] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (location.search.includes("hash=")) {
        const searchParams = new URLSearchParams(location.search);
        setHash(searchParams.get("hash"));
        const response = await GetDataService(
          `/users/checkinvitation?email=${searchParams.get(
            "email"
          )}&hash=${searchParams.get("hash")}`
        );
        console.log("check invitation", response);
        if (
          response?.response?.status === 404 &&
          response?.response?.data?.success === false
        ) {
          console.log("No matching password");
          message.warning("Урилга таарахгүй байна");
        }
      }
    };
    checkUser();
  }, [location.search]);

  // Function to validate password
  const validatePassword = () => {
    if (password.first !== password.second) {
      setErrorMsg("Нууц үг таарахгүй байна!");
      return false;
    } else {
      setErrorMsg(null);
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
      delete values.confirmPassword;
      values.hash = hash;
      const response = await PostDataService("/users/register", values);
      if (response?.response?.data?.success) {
        message.success("Амжилттай бүртгүүллээ!");
        navigate("/");
      } else if (response?.response?.status === 400) {
        setErrorMsg("Мэдээллээ шалгана уу!");
      } else if (response?.response?.status === 500) {
        setErrorMsg("Сүлжээнд асуудал гарлаа");
      }
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
        name={"Username"}
        rules={[
          {
            required: true,
            message: "Нэрээ бичнэ үү!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      {location.search === null ||
        (location.search === "" && (
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
        ))}
      {location.search && (
        <>
          <Form.Item
            label="Утасны дугаар"
            name={"phonenumber"}
            rules={[
              {
                required: true,
                message: "Утасны дугаараа бичнэ үү!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Байгууллага" name={"Customers"}>
            <Select />
          </Form.Item>
          <Form.Item
            label="Албан тушаал"
            name={"Position"}
            rules={[
              {
                required: true,
                message: "Албан тушаалаа сонгоно уу!",
              },
            ]}
          >
            <Select>
              <Option value="1">Менежер</Option>
              <Option value="0">Нягтлан</Option>
            </Select>
          </Form.Item>
        </>
      )}
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
          onChange={(e) => setPassword({ ...password, first: e.target.value })}
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
          onChange={(e) => setPassword({ ...password, second: e.target.value })}
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
      <div className=" text-red-500 w-full flex justify-center">{errorMsg}</div>
    </Form>
  );
};
