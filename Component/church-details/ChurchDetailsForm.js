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
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
function ChurchDetailsForm() {
  const [churchName, setChurchName] = useState("");
  const [churchEmail, setChurchEmail] = useState("");
  const [churchHandle, setChurchHandle] = useState("");
  const [churchPassword, setChurchPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      churchName.length == 0 ||
      churchEmail.length == 0 ||
      churchHandle.length == 0 ||
      churchPassword.length == 0
    ) {
      setError(true);
    }
  };
  return (
    <div>
      <div className="pl-40 pr-40">
        <Form></Form>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="input flex justify-between mb-10">
            <div className="flex w-full">
              <img src={home} className="p-5 reg-avatar" alt="Chart" />
              <input
                type="text"
                placeholder="Church name"
                name="churchName"
                onChange={(e) => setChurchName(e.target.value)}
              />
              {error && churchName.length <= 0 ? (
                <label className="text-red-400 font-light text-base	">
                  Church name can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
            <img src={close} className="p-5 reg-avatar right" alt="Chart" />
          </div>
          <div className="input flex mb-10">
            <img src={email} className="p-5 reg-avatar" alt="Chart" />
            <input
              type="text"
              name="churchEmail"
              placeholder="Church email address"
              onChange={(e) => setChurchEmail(e.target.value)}
            />
            {error && churchEmail.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
                Church email can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="input flex mb-10">
            <span className="p-3 border ">@</span>
            <input
              type="text"
              name="churchHandle"
              placeholder="Church handle"
              onChange={(e) => setChurchHandle(e.target.value)}
            />
            {error && churchHandle.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
                Church handle can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="input flex justify-between mb-10">
            <div className="flex ">
              <img src={lock} className="p-5 reg-avatar" alt="Chart" />
              <input
                type="text"
                name="churchPassword"
                placeholder="Choose a password for your church"
                onChange={(e) => setChurchPassword(e.target.value)}
              />
              {error && churchPassword.length <= 0 ? (
                <label className="text-red-400 font-light text-base	">
                  Church handle can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
            <img src={eyes} className="p-5 reg-avatar right" alt="Chart" />
          </div>
          <div>
            <label className="pt-5 pb-5">Referral ID (optional)</label>
            <div className="input flex mb-20">
              <img src={arrow} className="p-5 reg-avatar" alt="Chart" />
              <input type="text" placeholder="Enter referral ID" />
            </div>
          </div>

          <div className="pb-10">
            <button className=" proceed-btn uppercase p-5 text-white ">
              <Link href="/congrat">submit and get started</Link>
            </button>
          </div>
          <div className="pt-5 pb-20">
            <a className="signup-h" href="">
              <Link href="/">Already have an account? Sign in here</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChurchDetailsForm;
