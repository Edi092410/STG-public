import { Button, Divider, Form, Input, message } from "antd";
import { PostData } from "../../../backend/axios/AxiosAdmin";
import { GetDataService } from "../../../backend/axios/AxiosService2";
import { useState } from "react";
import { Mail } from "../Mail";
export const ForgetForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    let token;
    setLoading(true);
    try {
      // Validate all fields
      await form.validateFields();
      const response = await PostData("/resetpassword", e);
      if (response?.response?.status === 400) {
        try {
          const response = await GetDataService(
            `/users/forgotpassword?email=${e.email}`
          );
          console.log("fiscus response", response);
          message.success("Та цахим шуудангаа  шалгана уу!");
        } catch (error) {
          setErrMsg("Алдаа гарлаа. Дахин оролдоно уу!");
          console.log("error", error);
        }
      } else if (response?.response?.status === 500) {
        setErrMsg("Сүлжээнд асуудал гарсан байна.");
      } else if (response?.response?.status === 200) {
        setErrMsg("");
        token = response?.data?.data?.token;
        if (window.Email) {
          window.Email.send({
            SecureToken: "75e7c8f0-acc6-48cf-bfd8-d84e58225e1e",
            To: e.email,
            From: "m.erdenebayar.siticom@gmail.com",
            Subject: "Нууц үг сэргээх",
            Body: Mail({ token: token }),
          }).then((msg) => message.success(msg));
          setErrMsg(
            `Нууц үгийн сэргээлтийн бичлэг үүсгэлээ. Та цахим шуудангаа  шалгана уу!`
          );
        }
      }
    } catch (error) {
      setErrMsg("Алдаа гарлаа. Дахин оролдоно уу!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form layout="vertical" form={form} onFinish={(e) => handleSubmit(e)}>
      <h2 className=" text-lg font-semibold">Нууц үг мартсан</h2>
      <Divider />
      <Form.Item
        label="Цахим шуудан"
        name={"email"}
        rules={[{ required: true, message: "Цахим шуудангаа оруулна уу!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item>
        <div className="text-red-500">{errMsg}</div>
        <Button htmlType="submit" loading={loading} className=" w-full">
          Нууц үг авах
        </Button>
      </Form.Item>
    </Form>
  );
};
