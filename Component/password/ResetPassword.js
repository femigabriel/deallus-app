import React from "react";
const lock = "/images/lock.png";
const eyes = "/images/eyes.png";
import Link from "next/link";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

function ResetPassword() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="main">
        <div className="pt-10 flex justify-center items-center">
          <div className="container pt-10">
            <div className="">
            <div className="  border-b-2 border-slate-100">
                <h1 className="uppercase text-black text-center font-medium text-2xl ">
                reset password
                </h1>
              </div>
             
              <div className="flex flex-col p-20">
                <h1 className="welcome">Reset your password</h1>
                <p className="">
                  Please carefully create a new password and confirm reset to
                  sign in to your account
                </p>
              </div>
              <div className="pl-20 pr-20 p-10">
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
                          message: "Please input your new Password!",
                        },
                      ]}
                    ></Form.Item>
                    <Input
                      className="input w-full"
                      prefix={
                        <LockOutlined className="site-form-item-icon pr-5" />
                      }
                      placeholder="New password"
                    />
                  </>
                  <>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please confrim your new Password!",
                        },
                      ]}
                    ></Form.Item>
                    <Input
                      className="input w-full"
                      prefix={
                        <LockOutlined className="site-form-item-icon pr-5" />
                      }
                      type="password"
                      placeholder="Confirm new password"
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
                        <Link href="/congrat">Confirm Password reset</Link>
                      </button>
                    </>
                  </>
                </Form>

                {/* 
                <div className="input flex justify-between mb-10">
                  <div className="flex ">
                    <img src={lock} className="p-5 reg-avatar" alt="Chart" />
                    <input type="text" placeholder="New password" />
                  </div>
                  <img
                    src={eyes}
                    className="p-5 reg-avatar right"
                    alt="Chart"
                  />
                </div>
                <div className="input flex justify-between mb-10">
                  <div className="flex ">
                    <img src={lock} className="p-5 reg-avatar" alt="Chart" />
                    <input type="text" placeholder="Confirm new password" />
                  </div>
                  <img
                    src={eyes}
                    className="p-5 reg-avatar right"
                    alt="Chart"
                  />
                </div> */}
                <div>
                  {/* <div className="pb-10 pt-20">
                    <button className=" proceed-btn uppercase p-5 text-white ">
                      <Link href="/congrat">Confirm Password reset</Link>
                    </button>
                  </div> */}
                  <div className="flex justify-between pt-20 pb-10">
                    <a className="login-form-forgot" href="">
                      <Link href="/">Sign in</Link>
                    </a>

                    <a className="login-form-forgot" href="">
                      <Link href="/signUp">
                        Don't have an account? Sign up here
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center form-lists pt-5 ">
          <h1 className=""> About .</h1>
          <h1> Contact .</h1>
          <h1> Feature .</h1>
          <h1> Terms .</h1>
          <h1> Privacy Policy .</h1>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
