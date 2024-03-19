import { Button, Divider, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { PostData } from "../../../backend/axios/AxiosAdmin";
import { GetDataService } from "../../../backend/axios/AxiosService2";
import { useState } from "react";

export const ChangePasswordForm = () => {
  return (
    <Form layout="vertical" form={form} onFinish={(e) => handleSubmit(e)}>
      <h2 className=" text-lg font-semibold">Нууц үг солих</h2>
      <Divider />
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
        style={{ width: "100%" }}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
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

      <Form.Item>
        <div className="text-red-500">{errMsg}</div>
        <Button htmlType="submit" loading={loading} className=" w-full">
          Нууц үг авах
        </Button>
      </Form.Item>
    </Form>
  );
};
