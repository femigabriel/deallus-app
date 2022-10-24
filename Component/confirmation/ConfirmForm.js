import React from "react";
// import { Form, Input } from "antd";
// import { CheckOutlined } from "@ant-design/icons";
import Link from "next/link";
const pastor = "/images/pastor.png";
import { UserOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

function ConfirmForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="pl-40 pr-40 flex flex-col">
        <div className="pb-10 pt-10">
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
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please provide your Church Handle",
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
                <Input placeholder="Church Handle" className=" w-full" />
              </div>
            </>

            <div className=" pt-20">
              <div className="confrim-box flex p-10">
                <div className="p-1">
                  <img src={pastor} className=" " alt="Chart" />
                </div>
                <div className="p-5 flex flex-col profile ">
                  <h3 className="">Deallus Church Ministries</h3>
                  <span className="font">Pst. Dorris Beautittude</span>
                  <span>Ikeja, Lagos, Nigeria</span>
                </div>
              </div>
          
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
                    <Link href="/congrat">proceed</Link>
                  </button>
                </>
              </>
            </div>
          </Form>
        </div>
        <div className="pt-5 pb-20">
          <a className="signup-h" href="">
            <Link href="/">Already have an account? Sign in here</Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default ConfirmForm;
