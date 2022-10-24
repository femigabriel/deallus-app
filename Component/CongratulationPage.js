import React from "react";
const circledmark = "/images/circledmark.png";
function CongratulationPage() {
  return (
    <>
      <div className="main">
        <div className="pt-10 flex justify-center items-center">
          <div className="container pt-10">
            <div className="cricle pb-10">
              <div className="flex p-10 justify-center items-center">
                <img src={circledmark} className="" alt="Chart" />
              </div>
              <div className="flex p-10 flex-col">
                <div>
                  <h1 className="text-center pb-5 cong-h">Congratulations!</h1>
                  <div className="cong-c">
                    <p className="text-center cong-p p-5">
                      Your acount has been created successfully. We have sent an
                      email to emmabidem@gmail.com, please check and activate
                      your account.
                    </p>
                  </div>
                </div>
              </div>
              {/* <Form /> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center form-lists pt-5 mt-20 ">
          <h1 className=""> About .</h1>
          <h1> Contact .</h1>
          <h1> Feature .</h1>
          <h1> Terms .</h1>
          <h1> Privacy Policy .</h1>
        </div>
      </div>
    </>
  );
}

export default CongratulationPage;
