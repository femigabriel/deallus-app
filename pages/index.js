import React from "react";
import FooterSocials from "../Component/FooterSocials";
// import Form from "../Component/home/Form";
import FormFooter from "../Component/FormFooter";
import Header from "../Component/Header";
import Main from "../Component/home/Main";

function index() {
  return (
    <div className="">
      <>
        <Header />
        <Main />
        {/* <Form /> */}
        <div className="form-f">
          <FormFooter />
          <FooterSocials />
        </div>
      </>
    </div>
  );
}

export default index;
