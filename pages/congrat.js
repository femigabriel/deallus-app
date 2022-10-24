import React from "react";
import CongratulationPage from "../Component/CongratulationPage";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";

function congrat() {
  return (
    <div className="">
      <>
        <Header />
        <CongratulationPage />
        <div className="form-f">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default congrat;
