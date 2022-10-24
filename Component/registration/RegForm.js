import { Input } from "antd";
import React from "react";
import Link from "next/link";
const avatar = "/images/avatar.png";

function RegForm() {
  return (
    <div className="pl-40 pr-40">
      <div class="grid grid-cols-2 gap-4">
        <div className="input flex mb-10">
          <img src={avatar} className="p-5 reg-avatar" alt="Chart" />
          <input type="text" placeholder="First Name" />
        </div>
        <div className="input flex mb-10">
          <img src={avatar} className="p-5 reg-avatar" alt="Chart" />
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-address-icon"
          class="input border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
        />
      </div>
      <Input.Password
        className="input mt-10 "
        placeholder="Choose a password"
      />
      ;
      <div className="pt-20 pb-10">
        <button className=" proceed-btn uppercase p-5 text-white ">
          <Link href="/pricing">submit and get started</Link>
        </button>
      </div>
      <div className="pt-5 pb-20">
        <a className="signup-h" href="">
          <Link href="/">Already have an account? Sign in here</Link>
        </a>
      </div>
    </div>
  );
}

export default RegForm;
