import React from "react";
const greenmark = "/images/greenmark.png";
const orangemark = "/images/orangemark.png";
const purplemark = "/images/purplemark.png";
const bluemark = "/images/bluemark.png";
const aquamark = "/images/aquamark.png";
const darkmark = "/images/darkmark.png";
const pinkmark = "/images/pinkmark.png";
import Link from "next/link";
import Buttons from "../Buttons";

function PriceCard() {
  const items = [
    {
      id: 0,
      topic: "Congregation size up to 100",
      content:
        "   Selecting this plans means that your yearly members and visitors are between 0 - 100 in size ",
      month: "NGN /month",
      amount: "3,500",
      year: "Bill yearly",
      months: "/month",
      dollars: "$10",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className=" text-xl bg-green-400 uppercase p-5 text-white">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={greenmark} className="" alt="Chart" />,
    },

    {
      id: 1,
      topic: "Congregation size up to 250",
      content:
        "   Selecting this plans means that your yearly members and visitors are between 101 - 250 in size ",
      month: "NGN /month",
      amount: "5,000",
      year: "Bill yearly",
      months: "/month",
      dollars: "$14",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl bg-orange-400 uppercase p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={orangemark} className="" alt="Chart" />,
    },
    {
      id: 2,
      topic: "Congregation size up to 500",
      content:
        "   Selecting this plans means that your yearly members and visitors are between 251 - 500 in size ",
      month: "NGN /month",
      amount: "6,500",
      year: "Bill yearly",
      months: "/month",
      dollars: "$18",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl bg-purple-700 uppercase p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={purplemark} className="" alt="Chart" />,
    },
    {
      id: 3,
      topic: "Congregation size up to 1000",
      content:
        "   Selecting this plans means that your yearly members and visitors are between 501 - 1,000 in size ",
      month: "NGN /month",
      amount: "9,000",
      year: "Bill yearly",
      months: "/month",
      dollars: "$25",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl uppercase p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={bluemark} className="" alt="Chart" />,
    },
    {
      id: 4,
      topic: "Congregation size up to 2,500",
      content:
        "  Selecting this plans means that your yearly members and visitors are  between 501 - 1,000 in size ",
      month: "NGN /month",
      amount: "15,000",
      year: "Bill yearly",
      months: "/month",
      dollars: "$42",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl uppercase bg-sky-300 p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={aquamark} className="" alt="Chart" />,
    },
    {
      id: 5,
      topic: "Congregation size up to 4000",
      content:
        "   Selecting this plans means that your yearly members and visitors are  between 2501 - 4,000 in size ",
      month: "NGN /month",
      amount: "20,000",
      year: "Bill yearly",
      months: "/month",
      dollars: "$56",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl bg-pink-700 uppercase p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={pinkmark} className="" alt="Chart" />,
    },
    {
      id: 6,
      topic: "Unlimited members and visitors",
      content:
        "  Selecting this plan means your yearly members and visitors are above 4000 ",
      month: "NGN /month",
      amount: "30,000",
      year: "Bill yearly",
      months: "/month",
      dollars: "$100",
      year: "Bill yearly",
      button: (
        <div className="pt-20 p-10">
          <button className="text-xl bg-slate-600 uppercase  p-5  text-white ">
            <Link href="/churchdetails">select a plan</Link>
          </button>
        </div>
      ),
      icon: <img src={bluemark} className="" alt="Chart" />,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-44 pl-8">
        {items.map((list, key) => (
          <div className="card shadow-md flex flex-col  mb-20">
            <div className="flex p-10 justify-between border-b-2 border-b-slate-100">
              <div className="card-h">
                <h1>{list.topic}</h1>
              </div>
              <div>{list.icon}</div>
            </div>
            <div className="flex p-10 justify-between pt-20">
              <div className="flex flex-col">
                <h3 className="month">{list.month}</h3>
                <h1 className="amount">{list.amount}</h1>
                <h3 className="year">{list.year}</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="month">{list.months}</h3>
                <h1 className="amount">{list.dollars}</h1>
                <h3 className="year">{list.year}</h3>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className=" p-5 text-center text-xl">{list.content}</p>
            </div>
            <div> {list.button}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center form-lists pt-10">
        <h1 className=""> About .</h1>
        <h1> Contact .</h1>
        <h1> Feature .</h1>
        <h1> Terms .</h1>
        <h1> Privacy Policy .</h1>
      </div>
    </>
  );
}

export default PriceCard;
