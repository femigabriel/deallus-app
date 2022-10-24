import React from "react";
const logofooter = "/images/logofooter.png";

function FormFooter() {
  return (
    <div className="form-footer pt-5 pl-40 pr-40">
      <div className="">
        <div className="p-20 ">
          <img src={logofooter} className="logo" alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col about">
            <h1>About</h1>
            <nav>
              <li>Deallus</li>
              <li>Team</li>
              <li>Mission</li>
            </nav>
          </div>

          <div className="flex flex-col about">
            <h1>Churches</h1>
            <nav>
              <li>Course Title Stays Here</li>
              <li>Course Title Stays</li>
              <li>Course Title Here</li>
              <li>Course Title OK</li>
            </nav>
          </div>

          <div className="flex flex-col about">
            <h1>blogs</h1>
            <nav>
              <li>Catalog</li>
              <li>Tools</li>
              <li>Mentors</li>
              <li>Guardians</li>
            </nav>
          </div>
          <div className="flex flex-col about">
            <h1>Developers</h1>
            <nav>
              <li>API</li>
              <li>Documentation</li>
              <li>Churches</li>
              <li>Jobs</li>
            </nav>
          </div>
          <div className="flex flex-col about">
            <h1>SUpport</h1>
            <nav>
              <li>Contact us</li>
              <li>Help and FAQs</li>
              <li>Mentors</li>
              <li>Community</li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormFooter;
