// import { Input } from "antd";
import React, { useState } from "react";
import Link from "next/link";
const avatar = "/images/avatar.png";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";

function RegForm() {
  const onFinish = (values) => {
    // event.preventDefault();
    console.log("Received values of form: ", values);
  };
  return (
    <div className="pl-40 pr-40">
      <Form
        name="normal_login"
        className="login-form flex flex-col"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className=" double-input">
          <div>
            <>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "First Name is required!",
                  },
                ]}
              ></Form.Item>
              <Input
                className="input"
                prefix={
                  <UserOutlined
                    className="site-form-item-icon pr-5"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="First Name"
              />
            </>
          </div>
          <div>
            <>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "First Name is required!",
                  },
                ]}
              ></Form.Item>
              <Input
                className="input"
                prefix={
                  <UserOutlined
                    className="site-form-item-icon pr-5"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="First Name"
              />
            </>
          </div>
        </div>
        <>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Email is required!",
              },
            ]}
          ></Form.Item>
          <Input
            className="input w-full"
            prefix={
              <MailOutlined
                className="site-form-item-icon pr-5"
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            placeholder="Email"
          />
        </>
        <>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: " Password is required!",
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
          {/* <Form.Item></Form.Item> */}
         
                    <Form.Item></Form.Item>
                    <div className="pb-20"></div>
                    <>
                      <Form.Item></Form.Item>
                      <button
                        type="primary"
                        htmlType="submit"
                        className="proceed-btn uppercase p-5 mb-20 text-white"
                      >
                     <Link href="/churchdetails">submit and get started</Link>
                      </button>
                    </>
                  </>

        <div className="pt-5 pb-20 ">
          <a className="signup-h" href="">
            <Link href="/">Already have an account? Sign in here</Link>
          </a>
        </div>
      </Form>
    </div>
  );
}

export default RegForm;
