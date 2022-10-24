import React from "react";
import ConfirmMain from "../Component/confirmation/ConfirmMain";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";

function confirmation() {
  return (
    <div>
      <>
        <Header />
        <ConfirmMain />
        <div className="form-f ">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default confirmation;
