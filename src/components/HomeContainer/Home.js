// - - - React - - -
import React from "react";

// - - - CSS Files - - -
import "./Home.css";

import ImgHome from "../ImgHome/ImgHome";
import TextHome from "../TextHome/TextHome";


export default function Home(props) {
  return (
    <>
      <div className="homeContainer">
        <ImgHome/>
        <TextHome/>
    
      </div>
    </>  
  );
};