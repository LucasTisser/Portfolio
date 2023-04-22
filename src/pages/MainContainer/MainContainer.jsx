
// - - - React - - -
import React from "react";

// - - - CSS Files - - -
import "./MainContainer.css"

// - - - Sections Components - - -
import Home from '../../components/HomeContainer/Home'
import AboutMe from '../../components/AboutMe/AboutMe'
import Proyects from '../../components/Proyects/Proyects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Footer from "../../components/Footer/Footer";


export default function MainContainer() {
    return(
      <>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Proyects/>      
      <Contact/>
      <Footer/>
      </>
    )
}