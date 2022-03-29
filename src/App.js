import React, { useEffect, useState, useRef } from "react";

import './styles/App.css'
import Nav from './components/nav.js'
import Main from './components/main.js'
import FAQS from './components/faqs.js'
import Cartoon from './components/cartoon.js'
import License from './components/license.js'
import * as s from "./styles/globalStyles";
import { BrowserRouter as Router, Routers,Switch, Route, Routes } from "react-router-dom";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


function App() {
  

  return (

    
    <Router>
  <div className="">

    <Nav/>
    <Routes>
    <Route exact path='/' element ={<Main/>}/>
    <Route path='/faqs' element ={<FAQS/>}/>
    <Route path='/license' element ={<License/>}/>
    <Route path='/cartoon' element ={<Cartoon/>}/>

    </Routes>


    </div>

    </Router>
   



  );
}

export default App;
