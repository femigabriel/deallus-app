import React from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";

const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex flex-col pl-20 pr-20">
      <>
        <Form
          name="normal_login"
          className="login-form flex flex-col"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            ></Form.Item>

            <Input
              placeholder="Username"
              className="input w-full"
              prefix={
                <UserOutlined
                  className="site-form-item-icon pr-5 "
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              iconRender={(visible) =>
                visible ? <CheckOutlined /> : <CloseOutlined />
              }
            />
          </>
          <>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            ></Form.Item>

            <Input.Password
              placeholder="input password"
              className="input w-full"
              prefix={
                <LockOutlined
                  className="site-form-item-icon pr-5"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </>
          <>
                    <Form.Item></Form.Item>
                    <div className="pb-20"></div>
                    <>
                      <Form.Item></Form.Item>
                      <button
                        type="primary"
                        htmlType="submit"
                        className="proceed-btn uppercase p-5 text-white"
                      >
                       <Link href="/signUp"> Sign in</Link>
                      </button>
                    </>
                  </>
          {/* <>
            <Form.Item></Form.Item>
            <button
              type="primary"
              htmlType="submit"
              className="proceed-btn uppercase p-5 text-white"
            >
              <Link href="/signUp"> Sign in</Link>
            </button>
          </> */}
       
        </Form>
      </>
      <div className="flex justify-between pb-10">
        <a className="login-form-forgot" href="">
          <Link href="/forgetpassword">I can't login, help me</Link>
        </a>
        <a className="login-form-forgot" href="">
          <Link href="/registration">Don't have an account? Sign up here</Link>
        </a>
      </div>
    </div>
  );
};
export default App;
