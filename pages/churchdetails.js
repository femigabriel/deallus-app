import React from "react";
import ChurchDetails from "../Component/church-details/ChurchDetails";
import FooterSocials from "../Component/FooterSocials";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";

function churchdetails() {
  return (
    <div>
      <>
        <Header />
        <ChurchDetails />
        <div className="form-f ">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default churchdetails;
