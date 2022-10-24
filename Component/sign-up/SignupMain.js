import React from "react";
import SignUpForm from "./SignUpForm";
import Link from "next/link";

function SignupMain() {
  return (
    <div className="main ">
      <div className="pt-10 flex justify-center items-center">
        <div className="container pt-10">
          <div>
            <div className="  border-b-2 border-slate-100">
              <h1 className="uppercase text-black text-center font-medium text-2xl ">
                Sign up
              </h1>
            </div>
            <div className="flex flex-col p-20">
              <h1 className="welcome">Create your account</h1>
              <p className="pt-10">
                Choose an option for the type of account you would like to
                create
              </p>
            </div>

            <SignUpForm />
            <div className="pl-20 pr-20 pb-10">
              <p className="signup-p pb-20 pt-10">
                Please select this option to setup a new church account for the
                first time
              </p>
              <a className="signup-h" href="">
                <Link href="/">Already have an account? Sign in here</Link>
              </a>
              {/* <h3 className="signup-h"></h3> */}
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
  );
}

export default SignupMain;
