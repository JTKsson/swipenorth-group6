import React from "react";
import jobBox from "./jobBox.css";

export default function JobBox() {
  return (
    <>
      <div className="jobContainer">
        <p className="jobHeading">
          <span className="jobTitle">Job title</span>
        </p>
        <p className="jobSubheading">
          <span className="employer">Employer</span>
        </p>
        <p>
          <span className="subSubSubHeading">Omfattning &nbsp;</span>
          <span className="scope">100%</span>
        </p>
        
          <p className="about">Om tjänsten</p>
          <p>
          <span className="jobDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s <br />
            <span className="employerLink">Sök jobbet</span>
          </span>
        </p>
        <h4 className="applyBy">
          <span>sista ansökningsdatum </span>
          <span className="date">2023-05-27</span>
        </h4>
        <div className="btnContainer">
          <button>nej tack</button>
          <button>spara jobb</button>
        </div>
      </div>
    </>
  );
}
