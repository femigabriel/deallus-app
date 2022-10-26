// import { Input } from "antd";
import React, { useState } from "react";
import Link from "next/link";
const close = "/images/close.png";
const home = "/images/home.png";
const email = "/images/email.png";
const lock = "/images/lock.png";
const eyes = "/images/eyes.png";
const arrow = "/images/arrow.png";
import {
  LockOutlined,
  HomeOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  RiseOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
function ChurchDetailsForm() {
  const onFinish = (values, event) => {
    event.preventDefault();
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className="pl-40 pr-40">
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
                  message: "Email is required!",
                },
              ]}
            ></Form.Item>
            <Input
              className="input w-full"
              prefix={
                <HomeOutlined
                  className="site-form-item-icon pr-5"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="Church name"
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

            <Input
              placeholder="Church email"
              className="input w-full"
              prefix={
                <MailOutlined
                  className="site-form-item-icon pr-5"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
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
            <div className="flex w-full ">
              <span
                className="site-form-item-icon p-3 bg-gray-100"
                style={{ color: "rgba(0,0,0,.25)", border: "1px solid" }}
              >
                @
              </span>
              <Input
                placeholder="Church Handle"
                className=" w-full"
              
              />
            </div>
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
            
              <div className="w-full pt-20">
                <label className="left"> Referral ID (optional)</label>
                <Input
                  className="input w-full"
                  prefix={
                    <RiseOutlined
                      className="site-form-item-icon pr-5"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="Enter referral ID"
                />
              </div>
            </>

            <>
              <Form.Item></Form.Item>
              {/* <div className="pb-20"></div> */}
              <>
                <Form.Item></Form.Item>
                <button
                  type="primary"
                  htmlType="submit"
                  className="proceed-btn uppercase p-5 mb-20 text-white"
                >
                  <Link href="/signUp">submit and get started</Link>
                </button>
              </>
            </>
          </>
        </Form>

        <div className="pt-5 pb-20 left">
          <a className="signup-h" href="">
            <Link href="/">Already have an account? Sign in here</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChurchDetailsForm;
