import React, { useEffect, useState, useRef } from "react";

import './../styles//App.css'
import Nav from './nav.js'
import Home from './home.js'
import About from './about.js'
import Genesis from './genesis.js'
import Vision from './vision.js'
import Team from './team.js'
import Cartoon from './cartoon.js'
import GreenMap from './greenMap.js'
import FAQS from './faqs.js'
import Slider from './slider.js'
import AboutNew from './new_about.js'
import * as s from './../styles/globalStyles.js'


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


function Main() {
  

  return (

    

    <div className="main-container">

      <Home/>
      <s.SpacerXXXL></s.SpacerXXXL>
      <s.SpacerXXXL></s.SpacerXXXL>
      <About/>
      <AboutNew/>
      <s.SpacerXXXL></s.SpacerXXXL>
      <Team/>
      <Genesis/>
   
      <s.SpacerXXL></s.SpacerXXL>

    <Slider/>


   
    <s.SpacerXXXL></s.SpacerXXXL>
    <s.SpacerXXXL></s.SpacerXXXL>
    <GreenMap/>


    </div>



  );
}

export default Main;
