import React from "react";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
import Pricingmain from "../Component/pricing/Pricingmain";

function pricing() {
  return (
    <div className="">
      <>
        <Header />
        <Pricingmain />
        <div className="form-f">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default pricing;
