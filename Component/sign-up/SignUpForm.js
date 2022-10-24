import React from "react";
const brownchurch = "/images/brownchurch.png";
const bluechurch = "/images/bluechurch.png";
const female = "/images/female.png";
const male = "/images/male.png";
import Link from "next/link";

function SignUpForm() {
  return (
    <div className="flex justify-between pl-20 pr-20 pb-10">
      <div className="box">
        <div className="pt-5 flex justify-center items-center">
          <div className="flex">
            <div className=" bg-orange-400 rounded-full p-5 ">
              <img src={brownchurch} className="avatar " alt="Chart" />
            </div>
            <div className=" bg-blue-700 rounded-full p-5">
              <img src={bluechurch} className="avatar " alt="Chart" />
            </div>
          </div>
        </div>
        <h3 className="text-center pt-5 text-blue-800" href="">
          <Link href="/confirmation">Setup New Church</Link>
        </h3>
      </div>

      <div className="box">
        <div className="pt-5 flex justify-center items-center">
          <div className="flex">
            <div className=" rounded-full bg-yellow-600 p-5 ">
              <img src={male} className="avatar-2 " alt="Chart" />
            </div>
            <div className=" bg-blue-700 rounded-full p-5">
              <img src={female} className="avatar-2 " alt="Chart" />
            </div>
          </div>
        </div>
        <h2 className="text-center pt-5">Church Staff</h2>
      </div>
    </div>
  );
}

export default SignUpForm;
