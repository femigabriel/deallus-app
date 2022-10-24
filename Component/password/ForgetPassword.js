import React from "react";
import Link from "next/link";
const email = "/images/email.png";
import { MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
function ForgetPassword() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="main">
        <div className="pt-10 flex justify-center items-center">
          <div className="container pt-10">
            <div>
              <div className="  border-b-2 border-slate-100">
                <h1 className="uppercase text-black text-center font-medium text-2xl pb-5">
                  Forget password
                </h1>
              </div>

              <div className="flex flex-col p-20">
                <h1 className="welcome">It seems you forgot your password</h1>
                <p className="">
                  Please supply your email used during registration, to help us
                  send you a reset link
                </p>
              </div>

              <div className="p-10 pl-20 pr-20">
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
                          message: "Please input your Email address",
                        },
                      ]}
                    ></Form.Item>
                    <Input
                      className="input w-full"
                      prefix={
                        <MailOutlined className="site-form-item-icon pr-5" />
                      }
                      placeholder="Email address"
                    />
                  </>

                  {/* <div className="input flex mb-32">
                  <img src={email} className="p-5 reg-avatar" alt="Chart" />
                  <input type="text" placeholder="Email address" />
                </div> */}
                  <Form.Item></Form.Item>
                  <div className="pb-20"></div>
                  <div className="pb-10">
                    <button className=" proceed-btn uppercase p-5 text-white ">
                      <Link href="/resetpassword">send resend link</Link>
                    </button>
                  </div>
                </Form>
                <div className="flex justify-between pb-10 pt-20">
                  <a className="login-form-forgot" href="">
                    <Link href="/forgetpassword">I can't login, help me</Link>
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

export default ForgetPassword;
