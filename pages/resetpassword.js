import React from "react";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
import ResetPassword from "../Component/password/ResetPassword";

function resetpassword() {
  return (
    <div className="">
      <>
        <Header />
        <ResetPassword />
        <div className="form-f">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default resetpassword;
