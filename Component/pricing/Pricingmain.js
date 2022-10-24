import React from "react";
import PriceCard from "./PriceCard";

function Pricingmain() {
  return (
    <div className="p-20 main">
      <div className="flex flex-col text-center">
        <>
          <h1 className="pricing">Plans and Pricing </h1>
        </>

        <div className="flex justify-center items-center">
          <p className="pricing-p  ">
            All plans and pricing comes with 30 days free trial and includes all
            features. Select a plan to set up your church
          </p>
        </div>
      </div>
      <PriceCard />
    </div>
  );
}

export default Pricingmain;
