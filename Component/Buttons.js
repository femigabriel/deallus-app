import React from "react";
import Link from "next/link";
function Buttons() {
  return (
    <div className="pt-20 p-10">
      <button className="text-xl uppercase p-5 text-white ">
        <Link href="/pricing">select a plan</Link>
      </button>
    </div>
  );
}

export default Buttons;
