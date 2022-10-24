import React from "react";
import Form from "./Form";

function Main() {
  return (
    <>
      <div className="main">
        <div className="pt-10 flex justify-center items-center">
          <div className="container pt-10">
            <div>
              <div className="  border-b-2 border-slate-100">
                <h1 className="uppercase text-black text-center font-medium text-2xl">
                  sign in
                </h1>
              </div>
              <div className="flex flex-col p-20">
                <h1 className="welcome">Welcome back!</h1>
                <p className="">
                  Please provide valid information to login to your account
                </p>
              </div>

              <Form />
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

export default Main;
