import React from "react";
// import { Form, Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Link from "next/link";
const pastor = "/images/pastor.png";
const { name, setName } = useState("");
const { error, setError } = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();
  if (name.length == 0) {
    setError(true);
  }
};

const updateName = (event) => {
  setName(event.target.value);
};
function ConfirmForm() {
  return (
    <div className="pl-40 pr-40 flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="pb-10 pt-10">
          <div className="input flex">
            <span className="confirm-b border p-3 text-center text-2xl">@</span>
            <>
              <input type="text" name="name" onChange={updateName} />
              {error && name.length <= 0 ? (
                <label className="text-red-400 font-light text-base	">
                  Please provide the phone number associated with your church
                </label>
              ) : (
                ""
              )}
            </>

            <div className="p-3">
              <CheckOutlined className="confirm-mark p-1 text-center" />
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="confrim-box flex p-10">
            <div className="p-1">
              <img src={pastor} className=" " alt="Chart" />
            </div>
            <div className="p-5 flex flex-col profile ">
              <h3 className="">Deallus Church Ministries</h3>
              <span className="font">Pst. Dorris Beautittude</span>
              <span>Ikeja, Lagos, Nigeria</span>
            </div>
          </div>
          <div className="pt-20">
            <button className=" proceed-btn uppercase p-5 text-white">
              <Link href="/registration">proceed</Link>
            </button>
          </div>
        </div>
        <div className="pt-5 pb-20">
          <a className="signup-h" href="">
            <Link href="/">Already have an account? Sign in here</Link>
          </a>
        </div>
      </form>
    </div>
  );
}

export default ConfirmForm;
