import React from "react";
import {
  InstagramFilled,
  TwitterCircleFilled,
  GoogleCircleFilled,
  FacebookFilled,
} from "@ant-design/icons";

function FooterSocials() {
  return (
    <div className="flex justify-between pt-10 pl-40 pr-40 socials">
      <div className="pt-3">
        <h3>Copyright 2019, Deallus Church. Allrights reserved.</h3>
      </div>
      <div className="flex justify-between items-center form-lists pt-5 ">
        <h3>Legal & Privacy . Term of use . Site map</h3>
      </div>
      <div className="flex justify-between p-5">
        <InstagramFilled className="p-2 text-blue-700" />
        <TwitterCircleFilled className="p-2" />
        <GoogleCircleFilled className="p-2" />
        <FacebookFilled className="p-2" />
      </div>
    </div>
  );
}

export default FooterSocials;
