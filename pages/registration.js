import React from "react";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
import SignUpRegistration from "../Component/registration/SignUpRegistration";

function registration() {
  return (
    <div className="">
      <>
        <Header />
        <SignUpRegistration />
        <div className="form-f ">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default registration;
