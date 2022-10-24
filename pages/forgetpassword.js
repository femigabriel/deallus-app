import React from "react";
import ConfirmMain from "../Component/confirmation/ConfirmMain";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
import ForgetPassword from "../Component/password/ForgetPassword";

function forgetpassword() {
  return (
    <div>
      <>
        <Header />
        {/* <ConfirmMain /> */}
        <ForgetPassword />
        <div className="form-f ">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default forgetpassword;
