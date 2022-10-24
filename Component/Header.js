import React from "react";
const dellarulogo = "/images/dellarulogo.png";

function Header() {
  return (
    <div className="flex justify-center items-center pt-10 pb-5">
      <div>
        <img src={dellarulogo} className="logo " alt="Chart" />
      </div>
    </div>
  );
}

export default Header;
