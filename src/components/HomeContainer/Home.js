// - - - React - - -
import React from "react";

// - - - CSS Files - - -
import "./Home.css";

import ImgHome from "../ImgHome/ImgHome";
import TextHome from "../TextHome/TextHome";
import ButtonsHome from "../ButtonsHome/ButtonsHome";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Home(props) {
  // icon({name: 'user', family: 'classic', style: 'solid'})
  return (
    <>
      <div className="homeCss">
        <ImgHome/>
        <TextHome/>
        <ButtonsHome/>
        {/* <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> */}
      </div>
    </>  
  );
};