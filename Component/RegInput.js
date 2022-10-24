import React from "react";
const avatar = "/images/avatar.png";
function RegInput() {
  return (
    <div>
      <div>
        <div className="input flex mb-10">
          <img src={avatar} className="p-5 reg-avatar" alt="Chart" />
          <input type="text" placeholder="Oluwatobi" />
        </div>
      </div>
    </div>
  );
}

export default RegInput;
