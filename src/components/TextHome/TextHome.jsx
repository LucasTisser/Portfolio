// - - - React - - -
import React from "react";

// - - - CSS Files - - -
import "./TextHome.css";
import ButtonsHome from "../ButtonsHome/ButtonsHome";


export default function TextHome()  {
    return (
        <>
        <div className="titleHomeContainer">
            <h1 className="titleHome">Lucas Tissera</h1>
            <p className="subTitleHome">Developer Full-Stack Junior. Si se puede imaginar, se puede programar.</p>  
            <div className="buttonsHome">
                <ButtonsHome/>
            </div>
        </div>
        </>
    )

}