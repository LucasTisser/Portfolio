// - - - React - - -
import React from "react";

// import Button from "react-bootstrap/Button";

import Education from "../Education/Education";
import Experience from "../Experience/Experience";

// - - - CSS Files - - -
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="aboutMe">
      <div className="aboutMeTittleLine">
        <h1 className="aboutMeTittle">Sobre Mi</h1>
        <hr />
      </div>
      <div className="aboutMeContainer">
        <Education/>
        <Experience/>
      </div>
    </div>
  );
}
