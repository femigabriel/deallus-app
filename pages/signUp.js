import React from "react";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
// import SignUpForm from "../Component/sign-up/SignUpForm";
import SignupMain from "../Component/sign-up/SignupMain";

function signUp() {
  return (
    <div className="">
      <>
        <Header />
        <SignupMain />
        {/* <SignUpForm /> */}
        <div className="form-f ">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default signUp;
